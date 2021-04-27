const keys = require('../../.config/keys');

module.exports = (survey) => {
    return `
        <html>
            <body>
                <div style="text-align: center;">
                    <h3>Please do not reply to this email</h3>
                    <h3>We'd like your response!</h3>
                    <p>Please answer the following question:</p>
                    <p>${survey.body}</p>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/thanks">Yes</a>
                    </div>
                    <div>
                        <a href="${keys.redirectDomain}/api/surveys/thanks">No</a>
                    </div>
                </div>
            </body>
        </html>
    `;
};