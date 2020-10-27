const fs = require("fs");
const fsExtra = require("fs-extra");
const path = require("path");

const targetPath = process.argv[2];
const option = process.argv[3];

function analyzeFile(filePath) {
    const code = fs.readFileSync(filePath, { encoding: 'utf8' });
    let lines = 0, uncommented = -1, prev = false, needComments = 0, uncommentedLines = [];
    console.log('');
    const comments = code.split('\n').reduce((count, line, index) => {
        lines++;
        line = line.trim();
        if (line.match(/^\*/) ||
            line.match(/^\/\//) ||
            line.match(/^\/\*/) ||
            line.includes('//') ||
            (line.includes('/*') && line.includes('*/'))) {
            prev = true;
            return count + 1;
        }
        if (!('});'.includes(line)) && line.length > 2) {
            needComments++;
            if (!prev) {
                uncommented++;
                uncommentedLines.push({
                    line: index - 1,
                    code: line
                });
            }
        }
        prev = false;
        return count;
    }, 0);
    const percentage = Math.round((comments / lines) * 100);
    const commentCoverage = Math.round(((needComments - uncommented) / needComments) * 100);
    const commentRatio = comments / lines;
    return {
        fileName: path.basename(filePath),
        path: filePath,
        lines,
        needComments,
        comments,
        uncommented,
        commentCoverage,
        commentRatio,
        uncommentedLines
    };
}
const getAvg = a => Math.round(a.reduce((a, b) => a + b, 0) / a.length);
const stats = {
    lines: [],
    needComments: [],
    comments: [],
    uncommented: [],
    commentCoverage: [],
    commentRatio: []
};
function analyzeProject(PATH) {
    if (fs.statSync(PATH).isDirectory()) {
        const items = fs.readdirSync(PATH);
        return items.reduce((a, item) => {
            a.push(analyzeProject(path.join(PATH, item)));
            return a;
        }, []);
    } else if (PATH.includes('.js')) {
        const results = analyzeFile(PATH);
        console.log('Processed: ' + PATH);
        for (let result in results) {
            let ignoreProps = ['path', 'fileName', 'uncommentedLines'];
            if (!(ignoreProps).includes(result)) {
                stats[result].push(results[result]);
            }
        }
        return results;
    }
}

let analysis = analyzeProject(targetPath);

console.log('Summary');
console.log(`Average lines per file: ${getAvg(stats.lines)}`);
console.log(`Average comments needed per file: ${getAvg(stats.needComments)}`);
console.log(`Average comments lines per file: ${getAvg(stats.comments)}`);
console.log(`Average uncommented lines per file: ${getAvg(stats.uncommented)}`);
console.log(`Average comments to lines ratio per file: ${getAvg(stats.commentRatio)}`);
console.log(`Average comment coverage per file: ${getAvg(stats.commentCoverage)}%`);
console.log('')

analysis = {
    stats: {
        lines: getAvg(stats.lines),
        needComments: getAvg(stats.needComments),
        comments: getAvg(stats.comments),
        uncommented: getAvg(stats.uncommented),
        commentRatio: getAvg(stats.commentRatio),
        commentCoverage: getAvg(stats.commentCoverage),
    },
    files: analysis
};

if (option) {
    if (option == '--json') {
        let optionValue = process.argv[4];
        if (optionValue) {
            fs.writeFileSync(optionValue, JSON.stringify(analysis, null, 2), { encoding: 'utf8' });
        } else {
            console.log('ERROR: --json option requires path');
        }
    } else if (option == '--js') {
        let optionValue = process.argv[4];
        if (optionValue) {
            fs.writeFileSync(optionValue, 'var $commentCoverageResults = ' + JSON.stringify(analysis, null, 2), { encoding: 'utf8' });
        } else {
            console.log('ERROR: --js option requires path');
        }
    } else if (option == '--html') {
        let optionValue = process.argv[4];
        optionValue = path.join(optionValue, 'comment-coverage');
        if (optionValue) {
            const templatePath = path.join(path.dirname(process.argv[1]), 'templates/comment-coverage-template/');
            fsExtra.copySync(templatePath, optionValue);
            fs.writeFileSync(path.join(optionValue, 'js/data.js'), 'var $commentCoverageResults = ' + JSON.stringify(analysis, null, 2), { encoding: 'utf8' });
            console.log("Output comment coverage site at: " + optionValue);
        } else {
            console.log('ERROR: --html option requires path');
        }
    }
}
