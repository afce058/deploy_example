module.exports = {
    clearMocks: true,
    testEnvironment: "node",
    reporters: [
        "default", // Mantiene el reporter estándar de Jest
        [
          "./customMarkdownReporter.js", // Incluye el reporter personalizado
          { output: "test_results_service2.md" } // Configura el nombre del archivo Markdown
        ]
      ]
};
  