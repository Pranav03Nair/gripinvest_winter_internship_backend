"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateProductDescription = generateProductDescription;
exports.generateProductRecommendations = generateProductRecommendations;
exports.generatePortfolioInsights = generatePortfolioInsights;
exports.generateErrorSummary = generateErrorSummary;
const groq_sdk_1 = __importDefault(require("groq-sdk"));
const groq = new groq_sdk_1.default({ apiKey: process.env.GROQ_API_KEY });
async function generateProductDescription(data) {
    const { name, investment_type, tenure_months, annual_yield, risk_level, min_investment, max_investment, } = data;
    const prompt = `
Write nothing else but only a short, clear, and investor-friendly product description using the following details:

- Name: ${name}
- Type: ${investment_type}
- Tenure: ${tenure_months} months
- Annual Yield: ${annual_yield}%
- Risk Level: ${risk_level}
- Minimum Investment: ₹${min_investment}
${max_investment ? `- Maximum Investment: ₹${max_investment}` : ''}

Keep the tone informative and concise. Limit to 50 words. Keep is so that I can simply copy the entire content your give and paste it in description.
`;
    try {
        const response = await groq.chat.completions.create({
            model: 'llama-3.3-70b-versatile',
            messages: [{ role: 'user', content: prompt }],
        });
        return response.choices[0]?.message?.content?.trim() || '';
    }
    catch (error) {
        console.error('[GROK] Error in Description Generation:', error);
        return 'An investment opportunity tailored to your financial goals.';
    }
}
async function generateProductRecommendations(riskAppetite, products) {
    if (!products.length)
        return [];
    const productList = products
        .map((p, index) => `${index + 1}. Name: ${p.name}, Type: ${p.investment_type}, Tenure: ${p.tenure_months} months, Yield: ${p.annual_yield}%, Risk: ${p.risk_level}, Min: ₹${p.min_investment}${p.max_investment ? `, Max: ₹${p.max_investment}` : ''}`)
        .join('\n');
    const prompt = `
You are an investment assistant. Based on the user's risk appetite of "${riskAppetite}", recommend the top 5 investment products from the list below.

Available Products:
${productList}

Instructions:
1. Select products that match or are suitable for "${riskAppetite}" risk appetite
2. Consider yield, tenure, and investment amounts
3. Return ONLY a valid JSON array with the exact structure shown below
4. Include ALL required fields for each product
5. Return exactly 5 products (or all available if less than 5)

Expected JSON format:
[
  {
    "name": "product name",
    "investment_type": "bond|fd|mf|etf|other",
    "tenure_months": number,
    "annual_yield": number,
    "risk_level": "low|moderate|high",
    "min_investment": number,
    "max_investment": number or null,
    "description": "brief description"
  }
]

Return ONLY the JSON array, no other text.
`;
    try {
        const response = await groq.chat.completions.create({
            model: 'llama-3.3-70b-versatile',
            messages: [{ role: 'user', content: prompt }],
            temperature: 0.3,
        });
        const content = response.choices[0]?.message?.content?.trim() || '[]';
        // Clean the response
        const cleanContent = content
            .replace(/```json\n?/g, '')
            .replace(/```\n?/g, '')
            .trim();
        // console.log('Groq Response:', cleanContent);
        const recommendations = JSON.parse(cleanContent);
        if (!Array.isArray(recommendations)) {
            throw new Error('Response is not an array');
        }
        return recommendations.slice(0, 5); // Ensure max 5 products
    }
    catch (err) {
        console.error('[Groq Recommendation Error]', err);
        const filtered = products.filter((p) => p.risk_level === riskAppetite);
        return filtered.slice(0, 5);
    }
}
async function generatePortfolioInsights(investments, riskDistribution, totalInvested, expectedReturns) {
    if (!investments.length)
        return '';
    const investmentSummary = investments
        .map((inv) => `${inv.investment_products.name}: ₹${inv.amount} in ${inv.investment_products.risk_level} risk, yield ${inv.investment_products.annual_yield}%`)
        .join('\n');
    const prompt = `
You are an investment assistant. Generate a concise, user-friendly portfolio summary based on the following data:

Total Invested: ₹${totalInvested}
Expected Returns: ₹${expectedReturns}
Risk Distribution: ${JSON.stringify(riskDistribution)}
Investments:
${investmentSummary}

Provide actionable insights, highlight risk concentrations, and suggest balance improvements if necessary.
Return the response as plain text only.
`;
    try {
        const response = await groq.chat.completions.create({
            model: 'llama-3.3-70b-versatile',
            messages: [{ role: 'user', content: prompt }],
        });
        return response.choices[0]?.message?.content?.trim() || '';
    }
    catch (err) {
        console.error('[GROQ] Portfolio Insights Error', err);
        return 'You have a diversified portfolio. Consider balancing your investments across different risk levels for optimal returns.';
    }
}
async function generateErrorSummary(errorMap) {
    const errorsText = Object.entries(errorMap)
        .map(([k, v]) => `${k}: ${v} time(s)`)
        .join('\n');
    const prompt = `
You are an assistant. Summarize the following transaction errors for a user in a concise, human-readable way. 
Focus on key problem areas and frequency of errors. Return plain text only.

Errors:
${errorsText}
`;
    try {
        const response = await groq.chat.completions.create({
            model: 'llama-3.3-70b-versatile',
            messages: [{ role: 'user', content: prompt }],
        });
        return (response.choices[0]?.message?.content?.trim() || 'No summary available.');
    }
    catch (err) {
        console.error('[GROQ] Transaction Error Summary', err);
        return 'Unable to generate AI summary at this time.';
    }
}
//# sourceMappingURL=groq.utils.js.map