# AI Usage Documentation

This document details the AI integration in the GripInvest backend, powered by Groq AI SDK.

## Overview

The platform leverages Groq's LLaMA models to provide intelligent features across the investment management system. AI capabilities are implemented through the `groq.utils.ts` module and integrated into various services.

## AI Features

### 1. Product Description Generation

**Purpose**: Automatically generate compelling, informative product descriptions for investment products.

**Model**: `llama-3.3-70b-versatile`

**Implementation**:

- Located in: `src/utils/groq.utils.ts` → `generateProductDescription()`
- Triggered when: Creating or updating investment products
- Input: Product metadata (type, tenure, yield, risk level, investment limits)
- Output: Concise 50-word marketing description

**Example Usage**:

```typescript
const description = await generateProductDescription({
  investment_type: "Fixed Deposit",
  tenure_months: 12,
  annual_yield: "8.5",
  risk_level: "Low",
  min_investment: 10000,
  max_investment: 500000
});
```

### 2. Investment Recommendations

**Purpose**: Provide personalized investment suggestions based on user profile and risk appetite.

**Model**: `llama-3.3-70b-versatile`

**Implementation**:

- Located in: `src/utils/groq.utils.ts` → `generateProductRecommendations()`
- Triggered when: User requests recommendations via `/api/products/recommendations`
- Input: User profile (age, risk appetite, balance) + available products
- Output: Ranked list of suitable investment options with reasoning

**Recommendation Logic**:

- Analyzes user's risk tolerance
- Considers available balance
- Matches products to user profile
- Provides explanatory reasoning

### 3. Portfolio Insights

**Purpose**: Generate intelligent analysis of user's investment portfolio performance and trends.

**Model**: `llama-3.3-70b-versatile`

**Implementation**:

- Located in: `src/utils/groq.utils.ts` → `generatePortfolioInsights()`
- Triggered when: User requests insights via `/api/investments/insights`
- Input: Portfolio data (investments, returns, diversification metrics)
- Output: Comprehensive portfolio analysis with recommendations

**Analysis Includes**:

- Performance summary
- Risk assessment
- Diversification analysis
- Future recommendations
- Market trend insights

### 4. Error Summarization

**Purpose**: Intelligently categorize and summarize system errors for better monitoring and debugging.

**Model**: `llama-3.3-70b-versatile`

**Implementation**:

- Located in: `src/utils/groq.utils.ts` → `generateErrorSummary()`
- Triggered when: Admins request error summaries via `/api/logs/errors`
- Input: Error frequency map (endpoint → error message → count)
- Output: Categorized error summary with priority levels

## Configuration

### Environment Variables

```env
GROQ_API_KEY="your-groq-api-key"
```

### Error Handling

All AI functions implement comprehensive error handling:

- Graceful fallbacks when AI service is unavailable
- Logging of AI-related errors
- Timeout protection
- Retry mechanisms (where appropriate)

## Best Practices

### 1. Prompt Engineering

- Clear, specific prompts with context
- Consistent formatting requirements
- Word/character limits specified
- Role-based instructions

### 2. Performance Optimization

- Caching strategies for repeated requests
- Async processing for non-blocking operations
- Timeout configurations
- Rate limiting compliance

### 3. Data Privacy

- No sensitive user data in prompts
- Anonymized financial information
- Compliance with data protection regulations
- Secure API key management

## Usage Examples

### Product Service Integration

```typescript
// In product.service.ts
const product = await prisma.products.create({
  data: {
    ...productData,
    description: await generateProductDescription(productData)
  }
});
```

### Investment Service Integration

```typescript
// In investment.service.ts
const insights = await generatePortfolioInsights(portfolioData);
return { portfolio: userInvestments, insights };
```

## Monitoring & Analytics

### AI Usage Metrics

- Track AI function call frequency
- Monitor response times
- Log success/failure rates
- Measure user engagement with AI features

### Cost Management

- Monitor Groq API usage
- Implement usage quotas
- Track cost per feature
- Optimize prompt efficiency

## Troubleshooting

### Common Issues

1. **API Key Invalid**
   - Verify GROQ_API_KEY in environment
   - Check key permissions and quotas

2. **Rate Limiting**
   - Implement exponential backoff
   - Cache responses where possible
   - Monitor usage patterns

3. **Response Quality**
   - Review and refine prompts
   - Adjust context and instructions
   - Validate output format

### Debug Mode

Enable debug logging for AI operations:

```typescript
console.log('[AI] Request:', prompt);
console.log('[AI] Response:', response);
```

## Future Enhancements

### Planned Features

- Sentiment analysis of market trends
- Automated risk assessment
- Personalized investment coaching
- Predictive portfolio analytics

### Model Upgrades

- Evaluate newer LLaMA versions
- A/B testing different models
- Performance benchmarking
- Cost optimization

## Security Considerations

- API keys stored securely in environment variables
- No logging of sensitive financial data
- Rate limiting to prevent abuse
- Input validation for all AI prompts
- Output sanitization for security

---

**Note**: AI features enhance user experience but should not be the sole basis for financial decisions. All AI-generated content includes appropriate disclaimers and should be reviewed by qualified professionals.
