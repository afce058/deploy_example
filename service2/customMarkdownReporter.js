const fs = require("fs");

class CustomMarkdownReporter {
  constructor(globalConfig, options) {
    this.globalConfig = globalConfig;
    this.options = options;
  }

  onRunComplete(_, results) {
    const { output } = this.options;
    const markdown = this.generateMarkdown(results);
    fs.writeFileSync(output || "test_results_service2.md", markdown, "utf-8");
    console.log(`Markdown report generated: ${output || "test_results_service2.md"}`);
  }

  generateMarkdown(results) {
    let markdown = "# Test Results\n\n";

    markdown += `## Summary\n\n`;
    markdown += `- **Total Tests**: ${results.numTotalTests}\n`;
    markdown += `- **Passed**: ${results.numPassedTests}\n`;
    markdown += `- **Failed**: ${results.numFailedTests}\n`;
    markdown += `- **Skipped**: ${results.numPendingTests}\n\n`;

    results.testResults.forEach((suite) => {
      markdown += `### ${suite.testFilePath}\n\n`;

      suite.testResults.forEach((test) => {
        const statusIcon = test.status === "passed" ? "✅" : "❌";
        markdown += `- ${statusIcon} ${test.title}\n`;
      });

      markdown += `\n`;
    });

    return markdown;
  }
}

module.exports = CustomMarkdownReporter;
