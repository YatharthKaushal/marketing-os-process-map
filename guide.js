/*
 * Working guide for each map node, shown in the drawer.
 * Keys: need (what is needed) · check (what to check) · how (how to do it) · data (where the data comes from)
 *       tools (tools to use) · out (what comes out) · holds (what a record contains).
 * In a line, the words before the first ': ' are shown in bold.
 * Tools are Marketing OS tools first, then the free owner tools each platform provides.
 */
(function () {
  var G = {};
  function g(id, o) { G[id] = o; }

  /* ---------------- 0 Winning the client ---------------- */
  g('w_need', { need: ['Lead source: referral, website form, inbound call, event or outbound search', 'Contact: name, role, phone, email', 'Brand: name, website, where they sell'] });
  g('w_call', {
    need: ['Brand website and social handles', 'A rough idea of their budget', 'A quick look at their ads and store before the call'],
    how: ['Log the lead in the Sales pipeline', 'Look at the brand before the call: store, Instagram, ads, reviews', 'Ask about goals, current results, budget, timeline and who decides', 'Note the fit: is it a client we can help?', 'Set the next step and a date'],
    check: ['Budget: enough to cover fees and ads', 'Fit: product, margins and category work for us', 'Restricted category: health, alcohol or similar'],
    tools: ['Sales pipeline', 'Meta Ad Library: see their live ads', 'Google Ads Transparency Center: see their Google ads', 'Competitor tracker: quick comparison'],
    out: ['Qualified lead with value, stage, owner and next step']
  });
  g('w_prop', {
    need: ['Notes from the sales call', 'Services to offer', 'Rate card or fee model', 'Quick findings to show we understand the brand'],
    how: ['Pick the services: social, ads, SEO, email, creators and so on', 'State the scope: what is and is not included', 'Set the fee: retainer, project or performance fee', 'State goals and first 90 days', 'Generate the proposal, then the contract once agreed'],
    tools: ['Sales pipeline: proposal and contract', 'Finance: rate card'],
    out: ['Proposal', 'Contract', 'Updated deal stage and forecast']
  });
  g('w_sign', { check: ['Scope agreed', 'Fees agreed', 'Who pays ad platforms agreed', 'Contract signed'] });
  g('w_ws', {
    how: ['Create the client from the won deal', 'Carry over contacts, scope and contract value', 'Create one private workspace', 'Turn on the tools for the contracted services'],
    out: ['Client record', 'Private workspace', 'Billing schedule'],
    tools: ['Client workspaces', 'Journey tracker']
  });
  g('w_team', {
    need: ['List of services sold', 'Who is free: team workload'],
    how: ['Pick an account manager', 'Add a strategist, creative team, media buyer and channel specialists as needed', 'Add support agents if support is in scope', 'Assign the team to the workspace'],
    check: ['Each person has the right role', 'Nobody extra can see the client', 'Workload is realistic'],
    tools: ['Access control', 'Team: workload view'],
    out: ['Named team with access']
  });

  /* ---------------- 1 Onboarding and discovery ---------------- */
  g('o_kick', {
    need: ['Signed contract and scope', 'Founder or marketing lead on the call', 'Agenda'],
    how: ['Introduce both teams', 'Agree top goals for 90 days and 12 months', 'Name who approves work and how fast', 'Agree how often to talk and on which channel', 'Explain the access and information you need'],
    out: ['Approver list', 'Agreed goals', 'Meeting rhythm', 'Next steps as tasks'],
    tools: ['Journey tracker', 'Tasks and projects']
  });
  g('o_form', {
    need: ['Client contact details', 'The right form for this business type'],
    how: ['Send a signed link by email or WhatsApp', 'The client can save and return', 'Remind them after 2 days if incomplete'],
    tools: ['Discovery form'],
    out: ['Filled brand form']
  });
  g('o_fill', {
    need: ['Business: type (B2B, B2C, D2C, local, SaaS, e-commerce), model, where they sell', 'Products: list, hero products, prices, margins, stock', 'Goals: revenue targets, launches, new markets', 'Customers: who buys, who they want, why people buy and leave', 'Brand: story, values, voice, logo, colours, fonts', 'Assets: past campaigns, photos, videos', 'Past results: what worked, what failed, past ad spend, sales history', 'Competitors: main rivals', 'Limits: budget, team, timeline, legal rules']
  });
  g('o_disc', {
    need: ['The filled form', 'Founder and whoever knows the customers best'],
    how: ['Go through gaps in the form', 'Ask why customers choose them', 'Ask what they have tried, and why it failed', 'Ask for real numbers: AOV, margin, repeat rate, return rate', 'Ask what must never be said or done'],
    check: ['Numbers come from reports, not memory', 'Unknowns are marked, not guessed'],
    out: ['Discovery notes', 'List of unknowns']
  });
  g('o_prof', {
    need: ['Discovery form', 'Call notes', 'Sales and margin data'],
    how: ['Merge form and call notes', 'Fill each area of the brand profile', 'Mark unknowns', 'Calculate AOV, gross margin and repeat rate if not provided'],
    out: ['Brand profile or business brief'],
    tools: ['Discovery form', 'Brand knowledge base']
  });
  g('o_give', {
    need: ['Stores: Shopify, Instagram store, own website admin', 'Marketplaces: Amazon, Flipkart, Meesho, Myntra seller access', 'Social: Instagram, Facebook, YouTube, LinkedIn', 'Ads: Meta Business, Google Ads, Amazon Ads', 'Data: Google Analytics, Search Console, Tag Manager, Merchant Center', 'Messaging: email domain, WhatsApp Business, SMS sender'],
    how: ['The client approves each request on the platform itself', 'Passwords are never shared in chat', 'Access stays in the client\'s name'],
    tools: ['Connections']
  });
  g('o_conn', {
    how: ['List every account the brand has', 'Send each access request', 'Show status: requested, client action pending, connected, expiring', 'Remind the client about pending items'],
    check: ['Access level is the lowest that works', 'Every connection has an owner', 'Renewal dates are known'],
    tools: ['Connections'],
    out: ['Connection list with status']
  });
  g('o_acct', {
    check: ['Shopify: collaborator or app access', 'Meta: partner access to Page, ad account, pixel and catalogue', 'Google: Ads manager link, Analytics, Tag Manager, Search Console', 'Amazon: Ads API, or a user added in Seller Central', 'Flipkart, Meesho, Myntra: report downloads']
  });
  g('g_mkt', {
    how: ['Download reports from each seller panel', 'Import them on a set schedule', 'Staff apply changes in the panel', 'Record what was changed'],
    tools: ['Marketplace manager']
  });
  g('o_audit', {
    need: ['Read access to each account', 'Brand profile, so results are judged against goals'],
    check: [
      'Site speed: LCP under 2.5 s, INP under 200 ms, CLS under 0.1',
      'Mobile: pages easy to use on a phone',
      'SEO: titles, meta tags, sitemap, robots, broken links, schema, duplicates, indexing',
      'GEO and AEO: do AI tools and search answers name the brand, and which rivals and sources do they name?',
      'Conversion: product page content, trust signals, delivery estimate, COD, checkout steps, drop-off',
      'Tracking: tags firing, key events, pixel events, CAPI, duplicates, consent, UTM discipline',
      'Revenue match: ad platform revenue against real store orders',
      'Google Ads: structure, conversions, search terms, wasted spend, feed link',
      'Meta Ads: structure, creative fatigue, audience overlap, frequency, CPM trend',
      'Merchant Center: disapprovals, feed quality, shipping and return settings',
      'Email and SMS: domain setup, spam rate, list health, flows in place, consent, DLT status',
      'Social: posting rate, formats, reach, engagement, reply time, profile completeness',
      'Reviews: rating, volume, recent trend, themes, reply rate',
      'Marketplaces: listings, ratings, returns, ads, seller health'
    ],
    tools: [
      'Audit tool: runs and stores every check',
      'Google PageSpeed Insights: speed and Core Web Vitals',
      'Google Search Console: indexing and search queries',
      'Rich Results Test: schema',
      'Google Tag Assistant: Google tags',
      'Meta Pixel Helper and Events Manager: pixel, CAPI, event match quality',
      'GA4: traffic and funnels',
      'Google Ads and Meta Ads Manager: account review',
      'Merchant Center: feed diagnostics',
      'Google Postmaster Tools: email reputation',
      'Instagram Insights and YouTube Studio: social results',
      'Seller Central and seller panels: marketplace reports'
    ],
    how: ['Run the public checks first, as these need no access', 'Check tracking next, because every other number depends on it', 'Run each channel audit', 'Compare ad platform revenue with store orders', 'Score each finding by severity, revenue effect and effort'],
    out: ['Dated audit report', 'Findings: area, severity, evidence, fix, owner', 'Baseline numbers', 'Fix list as tasks']
  });
  g('o_rev', {
    need: ['Audit report', 'Goals from kickoff'],
    how: ['Remove duplicate findings', 'Mark what is broken, what works, and what is missing', 'Pick quick wins', 'Link each big finding to a goal'],
    check: ['Which channels make money today', 'Where money is wasted', 'What blocks the goals'],
    tools: ['Audit tool', 'Tasks and projects'],
    out: ['Priority fix list', 'Quick-win list', 'Client summary']
  });
  g('o_bk', {
    need: ['Brand profile', 'Audit findings', 'Brand files and policies'],
    how: ['Enter each item in the list below', 'Attach proof for claims', 'Set an owner and a review date', 'Mark anything unconfirmed'],
    check: ['Identity: name, story, mission, values', 'Products: catalogue, hero products, prices, ingredients or materials, sizing', 'Customers: ICPs and personas, once ready', 'Voice: tone, words to use, words to avoid', 'Visuals: logo, colours, fonts, imagery', 'Claims: approved claims and proof', 'Policies: shipping, returns, refunds, warranty, COD', 'FAQs: common customer questions and approved answers', 'Offers: past offers and discount limits', 'Competitors: who they are and how the brand differs', 'Legal: disclaimers and banned statements', 'Past results: what worked and what failed'],
    tools: ['Brand knowledge base'],
    out: ['One source of facts for staff and AI']
  });
  g('o_ok', { check: ['Profile facts are correct', 'Numbers are correct', 'Client agrees with the audit findings', 'Client agrees the priorities'], out: ['Signed-off profile and audit'] });
  g('s_prof', { holds: ['Business type and model', 'Products, pricing, margins', 'Goals', 'Customers', 'Brand story', 'Assets', 'Past results', 'Competitors', 'Budget, team, timeline, limits'] });
  g('s_bk', { holds: ['Identity: story, mission, values', 'Products: catalogue, sizes, materials, prices', 'Customers: ICPs and personas', 'Voice: tone, words to use and avoid', 'Visual identity: logo, colours, fonts', 'Claims: approved claims and proof', 'Policies: shipping, returns, refunds, COD', 'FAQs: approved answers', 'Offers: past offers and limits', 'Competitors: rivals and differences', 'Legal: disclaimers, banned statements', 'Past results: what worked and failed'], how: ['Every entry has an owner and a date', 'Changes keep their history', 'AI answers only from approved entries'] });
  g('f_audit', { how: ['Choose the audit type', 'Run public checks, then account checks', 'Upload marketplace reports', 'Review findings', 'Turn findings into tasks', 'Re-run on a schedule to see progress'], out: ['Audit report', 'Score over time'] });
  g('f_bk', { how: ['Add entries by area', 'Upload files and link sources', 'Approve entries before AI can use them', 'Review stale entries'] });

  /* ---------------- 2 Research ---------------- */
  g('r_mkt', {
    need: ['Brand profile and category', 'Regions to sell in'],
    check: ['Size: how big the market is', 'Trends: rising or falling', 'Seasonality: peaks, festivals, slow months', 'Demand: search volume and marketplace demand', 'Price bands: what buyers pay', 'Channels: where this category sells'],
    how: ['Define the category and regions', 'Check search trends over 2 to 5 years', 'Check marketplace bestsellers and prices', 'Read industry reports', 'Compare with the brand\'s own sales pattern'],
    data: ['Google Trends', 'Google Keyword Planner', 'Marketplace bestseller lists', 'Industry and government reports', 'Brand\'s own sales history'],
    tools: ['Research workspace', 'AI summaries'],
    out: ['Market notes with sources', 'Season map']
  });
  g('r_comp', {
    need: ['Competitor list from discovery', 'At least 3 to 5 direct rivals'],
    check: ['Positioning: who they target and their main promise', 'Pricing: price bands, offers, bundles', 'Channels: where they show up', 'Ads: hooks, formats, offers, how long ads run', 'Content: themes, formats, posting rate', 'Reviews: what customers love and hate', 'Store: product pages, checkout, trust', 'Gaps: what they do not do well'],
    how: ['Create a profile for each rival', 'Save their ads and top posts', 'Read their reviews for complaints', 'Compare side by side with the client', 'List gaps the client can win'],
    data: ['Meta Ad Library', 'Google Ads Transparency Center', 'Their websites and stores', 'Marketplace listings and reviews', 'Instagram and YouTube pages'],
    tools: ['Competitor tracker', 'AI summaries'],
    out: ['Competitor map', 'Comparison report', 'List of gaps']
  });
  g('r_lib', { check: ['Meta Ad Library: live ads on Facebook and Instagram', 'Google Ads Transparency Center: Google, YouTube and display ads', 'Limit: spend and results are not shown', 'Limit: some ads can only be viewed by hand'] });
  g('r_kw', {
    need: ['Product list', 'Customer language from reviews and support'],
    check: ['Keywords: what people search for', 'Intent: learn, compare or buy', 'Volume and competition', 'Questions people ask', 'Mentions: what people say about the brand, rivals and category', 'Sentiment: common praise and complaints'],
    how: ['List seed words from products and problems', 'Expand them, then group by topic and intent', 'Check who ranks today', 'Track brand and category mentions', 'Note repeated phrases to use in ads and content'],
    data: ['Google Keyword Planner', 'Google Search Console', 'Google Trends', 'Amazon search suggestions', 'Instagram, YouTube and review comments'],
    tools: ['SEO tool', 'Research workspace', 'Sentiment tracking'],
    out: ['Keyword map', 'Listening summary']
  });
  g('r_swot', {
    need: ['Audit', 'Market notes', 'Competitor map', 'Keyword map'],
    how: ['AI drafts each box from the research, with sources', 'Staff correct and rank the items'],
    check: ['Strengths: what the brand does better', 'Weaknesses: what holds it back', 'Opportunities: gaps in the market', 'Threats: rivals, costs, rule changes'],
    out: ['SWOT', 'Opportunity list']
  });
  g('r_icpai', {
    need: ['Order history', 'Customer data', 'Reviews', 'Support questions'],
    check: ['Who spends more', 'Who buys again', 'Who returns less', 'Who pays prepaid and who uses COD', 'Which cities and products lead', 'What reviews say about why people bought'],
    how: ['Group customers by value and repeat buying', 'Compare the top group with the rest', 'Look for shared traits', 'Draft ICPs from the pattern'],
    data: ['Shopify orders and customers', 'Marketplace reports', 'Reviews and support tickets', 'Meta and Google audience insights', 'Surveys'],
    tools: ['ICP builder', 'CRM and customer database'],
    out: ['Draft ICPs']
  });
  g('r_icp', {
    need: ['Draft ICPs', 'Customer interviews or surveys, if available'],
    check: ['Demographics: age, gender, city tier, income, language', 'Psychographics: values, lifestyle, beliefs', 'Pain points: problems they want solved', 'Objections: why they hesitate', 'Buying triggers: what makes them buy now', 'Channels: where they spend time', 'Journey: how they discover, compare, buy and return'],
    how: ['Keep 2 to 4 ICPs at most', 'Write one persona per ICP', 'Map each persona\'s journey', 'Mark each as a guess, backed by evidence, or proven by sales data'],
    tools: ['ICP builder'],
    out: ['ICPs', 'Buyer personas', 'Customer journey map']
  });
  g('r_ok', { check: ['Client recognises these buyers', 'Client agrees who to prioritise'] });
  g('r_rep', { check: ['Every finding has a source', 'Top opportunities are clear', 'Unknowns are stated'], out: ['Insights report', 'Personas', 'Competitor map', 'Opportunity list'] });
  g('s_icp', { holds: ['ICP name and confidence', 'Demographics', 'Psychographics', 'Pain points', 'Objections', 'Buying triggers', 'Preferred channels', 'Customer journey'] });
  g('s_ins', { holds: ['Market size, trends, demand', 'Competitor map', 'Keyword map', 'Listening summary', 'SWOT', 'Opportunity list'] });

  /* ---------------- 3 Strategy ---------------- */
  g('t_draft', {
    need: ['Brand profile', 'Audit', 'Insights report', 'ICPs', 'Margins'],
    how: ['Gather all inputs', 'AI drafts options, with a reason for each', 'AI lists what is missing'],
    tools: ['Strategy builder', 'Command Center'],
    out: ['Draft strategy for the strategist to edit']
  });
  g('t_pos', {
    need: ['ICPs', 'Competitor gaps', 'Brand knowledge'],
    how: ['Pick the main ICP', 'State what the brand offers', 'State why it is different', 'Write the core message', 'Write one message per persona', 'Attach proof: reviews, data, certificates'],
    check: ['True: the brand can back it up', 'Different: rivals do not say the same', 'Clear: a customer gets it in one line'],
    out: ['Positioning statement', 'Value proposition', 'Message for each persona, with proof']
  });
  g('t_goal', {
    need: ['Revenue targets', 'Baseline numbers from the audit', 'Margins'],
    how: ['Pick one north-star metric', 'Write SMART goals', 'Break goals down by funnel stage', 'Set a target for each KPI'],
    check: ['Awareness: reach, impressions', 'Interest: CTR, engagement', 'Conversion: conversion rate, CPA, ROAS', 'Retention: repeat rate, LTV', 'Efficiency: CAC, LTV to CAC ratio'],
    out: ['Goals', 'North-star metric', 'KPI targets']
  });
  g('t_fun', {
    need: ['ICPs and journey map', 'Channel results from the audit'],
    how: ['For each funnel stage, pick the audience, message, channel, content and offer', 'Give each channel one clear role', 'Pick mediums and formats', 'Set demography: age, gender, cities, languages', 'Set content themes'],
    check: ['Awareness: reels, creators, video ads, PR', 'Interest: social posts, SEO blogs, retargeting', 'Consideration: reviews, emails, product pages', 'Conversion: search ads, cart reminders, offers', 'Retention: cross-sell, up-sell, loyalty', 'Advocacy: referrals, reviews, testimonials'],
    tools: ['Strategy builder: funnel builder'],
    out: ['Funnel plan', 'Channel plan']
  });
  g('t_gapchk', { check: ['Every funnel stage has a campaign', 'Every channel has a role', 'Every campaign has a KPI'] });
  g('t_prof', {
    need: ['Price, product cost, shipping cost', 'Discounts, GST and payment fees', 'COD share and return rate'],
    how: ['Calculate profit per order after all costs', 'Calculate break-even ROAS: price after GST and discounts, divided by profit per order before ads', 'Adjust for orders lost to returns', 'Calculate the most a brand can pay for a customer'],
    check: ['Is the margin enough for ads?', 'What does an offer do to profit?', 'Is repeat purchase needed to make money?'],
    data: ['Shopify orders', 'Product costs from the client', 'Courier and payment reports'],
    tools: ['Profit calculator'],
    out: ['Break-even ROAS', 'Target CPA', 'Spend limit']
  });
  g('t_plan', {
    need: ['Funnel plan', 'Profit numbers', 'Season map'],
    how: ['Choose offers: discounts, bundles, gifts, free trials, lead magnets', 'Check each offer still makes profit', 'Split the budget by channel, campaign and month', 'Keep part of the budget for tests', 'Fill the calendar with campaigns, launches and festivals', 'Write a go-to-market plan for each launch'],
    tools: ['Offers', 'Budget planner', 'Marketing calendar', 'Launch planner'],
    out: ['Offer plan', 'Budget plan', 'Annual or quarterly calendar', 'Launch plans']
  });
  g('t_rev', { check: ['Strategy matches the goals', 'Numbers add up', 'Budget covers the plan', 'Team has capacity', 'Claims and offers are safe'] });
  g('t_sign', { need: ['Clear summary for the client', 'Goals, budget and timeline'], check: ['Goals agreed', 'Budget agreed', 'Offers agreed', 'Start dates agreed'], how: ['Send for sign-off by link', 'Record who signed and when'] });
  g('t_turn', { how: ['Create draft campaigns from the plan', 'Create tasks, owners and deadlines', 'Fill the calendar'], tools: ['Campaigns', 'Tasks and projects'] });
  g('s_strat', { holds: ['Positioning and message', 'Goals, north-star metric, KPIs', 'Funnel plan', 'Channels and their roles', 'Offers', 'Budget', 'Calendar', 'Who signed and when'] });

  /* ---------------- 4 Brand kit ---------------- */
  g('b_kit', {
    need: ['Existing logo and brand files', 'Positioning and message', 'Brand knowledge'],
    how: ['Set logo use, colours, typography and imagery style', 'Write brand voice and tone, with examples', 'Pick 3 to 6 content pillars', 'Link each pillar to a funnel stage'],
    check: ['Rules are clear for a new designer', 'Voice works in every language used', 'Pillars match the strategy'],
    out: ['Brand guidelines', 'Voice guide', 'Content pillars']
  });
  g('b_tpl', {
    need: ['Brand guidelines', 'Photos, videos, logos, product shots'],
    how: ['Create templates for posts, ads, emails and presentations', 'Upload all assets', 'Tag each by product, format and campaign', 'Record usage rights and expiry'],
    tools: ['Brand kit', 'Asset library'],
    out: ['Template library', 'Organised asset library']
  });
  g('b_ok', { check: ['Logo and colours correct', 'Voice sounds like the brand', 'Pillars agreed'] });
  g('s_kit', { holds: ['Guidelines: logo use, colours, typography, imagery', 'Voice and tone', 'Content pillars', 'Templates', 'Images, videos, logos, product shots', 'Usage rights and expiry'] });

  /* ---------------- 5 Infrastructure setup ---------------- */
  g('i_track', {
    need: ['GTM and analytics access', 'List of key events', 'Ad account access'],
    how: ['Install GTM on the site', 'Connect GA4', 'Add Meta Pixel and Google Ads tags', 'Set up CAPI for server-side events', 'Use a web pixel for Shopify checkout events', 'Add meta tags', 'Set conversion events: view, add to cart, checkout, purchase', 'Write UTM naming rules'],
    check: ['Events fire once, not twice', 'Purchase value is correct', 'Consent choices are respected', 'Numbers match store orders within an agreed range'],
    tools: ['Setup checklist', 'Google Tag Assistant', 'Meta Pixel Helper and Events Manager', 'GA4 DebugView'],
    out: ['Tracking plan', 'Working tracking']
  });
  g('i_seo', {
    need: ['Audit findings', 'Keyword map', 'Site admin access'],
    how: ['Fix site speed', 'Fix indexing problems', 'Add schema', 'Submit sitemaps', 'Fix broken links and titles', 'Build landing pages for main campaigns'],
    check: ['Page speed passes', 'Pages are indexed', 'Landing page matches the ad', 'Page has clear offer, proof and one CTA'],
    tools: ['SEO tool', 'Landing page builder', 'PageSpeed Insights', 'Search Console'],
    out: ['Fixed site', 'Landing pages']
  });
  g('i_send', {
    need: ['Email domain access', 'WhatsApp Business number', 'Business documents', 'Customer lists with consent source'],
    how: ['Set SPF, DKIM and DMARC on the email domain', 'Verify WhatsApp and get templates approved', 'Register SMS sender and templates on DLT', 'Clean and import contact lists', 'Add cookie consent, privacy policy and opt-ins'],
    check: ['Domain passes authentication', 'Each list has a consent source', 'Unsubscribe works', 'Opt-outs are honoured'],
    tools: ['Messaging', 'Setup checklist', 'Google Postmaster Tools'],
    out: ['Ready senders', 'Clean lists', 'Consent records']
  });
  g('i_crm', {
    need: ['Customer and order exports', 'Past email and SMS lists'],
    how: ['Import customers and orders', 'Merge duplicates', 'Keep consent history', 'Calculate LTV and RFM', 'Create starter segments'],
    data: ['Shopify', 'Past email tools such as Klaviyo', 'Marketplace reports'],
    tools: ['CRM and customer database'],
    out: ['One profile per customer']
  });
  g('i_own', { need: ['Business verification documents', 'GST and company details', 'Owner approval on Meta, Google or WhatsApp'] });
  g('i_list', {
    how: ['Verify business on Meta, Google and WhatsApp', 'Update Google Business Profile', 'Update marketplace brand pages', 'Keep name, address and phone the same everywhere'],
    tools: ['Connections', 'Social accounts']
  });
  g('i_test', {
    check: ['Tracking: place a test order and follow it through', 'Sending: test email, SMS, WhatsApp, RCS', 'Posting: schedule a test post', 'Ads: pixel events reach the ad platform', 'Consent: opt-out stops messages', 'Links: UTMs arrive in analytics'],
    tools: ['Setup checklist', 'Connections'],
    out: ['Pass or fail for each check']
  });
  g('i_pass', { check: ['All tests pass', 'Any failed item has a fix and owner', 'Stack is trackable from ad to order'] });
  g('s_crm', { holds: ['Contact details', 'Orders', 'Messages and calls', 'Consent', 'LTV and RFM', 'Segments', 'Tickets', 'Language and preferred channel'] });

  /* ---------------- 6 Production ---------------- */
  g('p_brief', {
    need: ['Signed strategy', 'Calendar', 'Offer and budget'],
    how: ['Pick the campaign type: ads, broadcast, automated flow, voice or mixed', 'Write the objective', 'Name the audience', 'State the message and offer', 'Choose channels', 'Set budget, timeline and KPIs'],
    check: ['Matches the strategy', 'One clear goal', 'Has a KPI and an owner'],
    tools: ['Campaigns'],
    out: ['Campaign brief']
  });
  g('p_cal', {
    need: ['Campaign brief', 'Segments', 'Channel plan'],
    how: ['Choose segments', 'Check reachable size per channel', 'Plan content per channel and date', 'Assign tasks'],
    tools: ['Campaigns', 'Segments', 'Marketing calendar', 'Tasks and projects'],
    out: ['Audience', 'Content calendar']
  });
  g('p_make', {
    need: ['Brief', 'Brand kit', 'Assets'],
    check: ['Copy: ads, captions, blogs, emails, scripts, landing pages', 'Design: posts, carousels, banners, infographics', 'Video: reels, shorts, ads, explainers, testimonials', 'Long-form: blogs, guides, whitepapers, case studies, ebooks'],
    how: ['Use a clear structure such as AIDA, or Hook, Body, CTA', 'Start from a template', 'Save versions and reasons for changes'],
    tools: ['Content studio', 'AI editor', 'Asset library'],
    out: ['Master creative in English']
  });
  g('p_flow', {
    need: ['Trigger', 'Audience', 'Approved templates'],
    how: ['Pick a trigger, such as abandoned cart', 'Add waits, conditions and messages', 'Add an exit, such as customer bought', 'Test it', 'Or describe it in Command Center and edit the draft'],
    check: ['Consent is checked', 'Customer can opt out', 'Flow stops once the goal is met'],
    tools: ['Automation builder', 'Command Center'],
    out: ['Automated flow, ready for review']
  });
  g('p_lang', {
    need: ['Approved English master', 'Target languages and dialects', 'Formats per platform'],
    how: ['Pick languages and dialects', 'AI creates each version', 'AI resizes for each platform', 'Each version stays linked to the master'],
    tools: ['Language generator'],
    out: ['Versions by platform, language and dialect']
  });
  g('p_chk', { check: ['Meaning matches the master', 'Tone suits the audience', 'Text fits the design', 'No awkward or wrong words', 'Offers and prices are correct'] });
  g('p_head', { check: ['Brand: matches the brand kit', 'Message: matches the brief', 'Claims: approved and provable', 'Legal: disclosures present', 'AI: AI-made content labelled where needed', 'Rights: asset usage allowed'] });
  g('p_need', { check: ['New claims or offers', 'Budget changes', 'Sensitive topics', 'Anything the contract says needs approval'] });
  g('p_cli', { how: ['Open the link or WhatsApp message', 'Review the exact version', 'Approve or ask for changes'], tools: ['Approvals'] });
  g('p_sch', { check: ['Dates match the calendar', 'Links and UTMs work', 'Audience and exclusions are right', 'Offer is live in the store', 'Stock is available'], out: ['Scheduled campaign'] });
  g('s_camp', { holds: ['Type, goal and audience', 'Channels', 'Budget and dates', 'Content versions', 'Approvals', 'Results'] });

  /* ---------------- 7 Distribution ---------------- */
  g('d_soc', {
    need: ['Connected handles', 'Brand kit'],
    how: ['Keep profile, bio and links updated', 'Keep verification active', 'Set who can use each account', 'Review insights monthly'],
    check: ['Reach and engagement', 'Best posts and reels', 'Follower growth', 'Reply time'],
    data: ['Instagram Insights', 'Facebook Page insights', 'YouTube Studio', 'LinkedIn analytics'],
    tools: ['Social accounts', 'Social publisher']
  });
  g('d_pub', { check: ['Instagram: posts, reels, carousels', 'Facebook: posts and reels', 'YouTube: videos and shorts', 'LinkedIn, Pinterest, Threads, X', 'Blog and SEO content'], tools: ['Social publisher', 'SEO tool'] });
  g('d_msg', {
    need: ['Approved templates', 'Consented audience'],
    check: ['Consent', 'Frequency limit', 'Quiet hours', 'Message category on WhatsApp', 'DLT template on SMS'],
    tools: ['Messaging', 'Campaigns'],
    out: ['Sent, delivered, read and clicked numbers']
  });
  g('d_ads', {
    need: ['Approved creatives', 'Budget', 'Working tracking', 'Audience'],
    how: ['Follow the naming rules', 'Set objective, audience and exclusions', 'Add UTMs', 'Start with a small test budget', 'Test hooks, images and audience angles', 'Launch and confirm the ad is approved'],
    check: ['Search: Google, Bing', 'Social: Meta, LinkedIn, YouTube, X, Snapchat', 'Display and programmatic', 'Retargeting: visitors and cart leavers', 'Affiliates'],
    tools: ['Ads manager', 'Meta Ads Manager', 'Google Ads'],
    out: ['Live test campaigns']
  });
  g('d_bud', { need: ['Amount and reason', 'Expected result'], how: ['Approve by link, with the amount confirmed'] });
  g('d_earn', {
    check: ['Influencers: find, contact, negotiate, brief, track', 'PR: media list, press release, coverage', 'Reviews and ratings', 'Partnerships and co-marketing', 'Events: webinars, live sessions, trade shows, local events'],
    how: ['Pick creators by audience fit, not followers alone', 'Agree deliverables, rights and disclosure', 'Give each an affiliate link or code', 'Track sales per creator'],
    tools: ['Creator manager', 'PR and events'],
    out: ['Creator and PR results']
  });
  g('d_mkt', {
    how: ['Amazon: run ads directly', 'Flipkart, Meesho, Myntra: import reports', 'Staff apply changes in each panel', 'Record what changed'],
    data: ['Amazon Ads', 'Seller Central', 'Flipkart, Meesho and Myntra panels'],
    tools: ['Marketplace manager']
  });
  g('g_reel', { how: ['Export the video without music', 'A person adds trending audio on the phone', 'Post from the Instagram app', 'Mark the task done'] });
  g('d_daily', {
    check: ['Spend: on track against plan', 'CTR: are people clicking?', 'CPC and CPM: cost of traffic', 'Add-to-cart rate: is interest real?', 'ROAS and CPA: against target', 'Frequency: is the ad tiring?', 'Delivery: rejected ads or errors'],
    how: ['Check problems first', 'Then pacing', 'Then results', 'Note what to change'],
    data: ['Dashboards', 'Ad platform reports', 'Store orders'],
    tools: ['Dashboards and reports', 'Ads manager']
  });

  /* ---------------- 8 Leads and sales ---------------- */
  g('l_sig', { check: ['Store visit', 'Product view', 'CTA click', 'Left cart or checkout', 'Form or chat', 'Call or DM', 'Comment or question', 'Likes: only a count, nobody is named'] });
  g('l_cap', {
    how: ['Create or update the customer profile', 'Add missing details', 'Link the source campaign', 'Score by fit and behaviour', 'Add to the right segment'],
    check: ['Fit: matches the ICP', 'Behaviour: pages viewed, clicks, cart value', 'Recency: how recent the action is'],
    tools: ['Lead tracker', 'CRM and customer database', 'Segments']
  });
  g('g_like', { how: ['Ask people to comment a keyword', 'Send a private reply to those comments', 'Use the like count only as a signal for content'] });
  g('l_ok', { check: ['Consent for this channel', 'Not already bought', 'Within sending hours', 'Under the message limit', 'No open complaint', 'Product in stock'] });
  g('l_send', { how: ['Wait a set time', 'Send a reminder', 'Send a second reminder', 'Send an offer last, within margin limits', 'Stop on purchase'], tools: ['Automation builder', 'Messaging'], check: ['Delivered', 'Clicked', 'Recovered revenue'] });
  g('l_ai', {
    need: ['Approved brand knowledge', 'Catalogue', 'Order data', 'Policies'],
    how: ['State that it is an AI', 'Answer from approved facts only', 'Help with products, orders, returns', 'Hand over when unsure or when asked'],
    tools: ['AI chat bot', 'AI voice agent']
  });
  g('l_big', { check: ['High order value', 'Bulk or B2B request', 'Customer asks for a person', 'AI is unsure'] });
  g('l_sal', { need: ['Full conversation', 'Customer profile'], how: ['Reply fast', 'Understand the need', 'Recommend and share a link', 'Record the outcome and feedback'], tools: ['Lead tracker', 'One inbox'] });
  g('l_buy', { check: ['Order placed', 'Not bought after the flow ends'] });
  g('l_cod', {
    how: ['Score the order risk', 'Ask the customer to confirm by WhatsApp or call', 'Fix wrong addresses', 'Offer prepaid in a separate message', 'Check or block risky orders'],
    check: ['Past returned parcels', 'Address quality', 'Order value', 'Pin code history'],
    data: ['Store orders', 'Courier reports'],
    tools: ['COD tools']
  });
  g('l_cro', {
    need: ['Drop-off report', 'Heatmaps', 'Customer questions'],
    check: ['Landing page: message matches the ad', 'Product page: photos, reviews, delivery, returns', 'Cart: upsells, shipping cost', 'Checkout: steps, COD, payment options', 'Forms: length and errors', 'Mobile: speed and tap targets'],
    how: ['Find the biggest drop-off', 'Watch heatmaps', 'Write a hypothesis', 'Run an A/B test', 'Keep the winner'],
    data: ['GA4 funnels', 'Heatmaps and session paths', 'Store analytics'],
    tools: ['Behaviour tracking', 'Testing'],
    out: ['Test results', 'Page improvements']
  });

  /* ---------------- 9 Engagement ---------------- */
  g('e_box', { how: ['Collect all comments, DMs, mentions, chats and reviews', 'AI reads and labels each one', 'Route by type'], tools: ['One inbox'] });
  g('e_kind', { check: ['Keyword comment', 'Product question', 'Complaint', 'Spam or abuse', 'Legal threat or crisis'] });
  g('e_key', { how: ['Reply publicly', 'Send a private reply with a link', 'Stop after one private reply unless they respond'] });
  g('e_q', { how: ['AI drafts from approved answers', 'Staff approve or edit', 'Or write it by hand'], tools: ['One inbox'] });
  g('e_tick', { need: ['Customer details', 'Order details', 'What went wrong'], how: ['Open a ticket', 'Set priority and SLA', 'Solve or hand over'], tools: ['Support tickets', 'AI chat bot', 'AI voice agent'] });
  g('e_solved', { check: ['Customer problem fixed', 'Refund or return done', 'Customer told the outcome'] });
  g('e_esc', { how: ['Senior agent takes over', 'Client is told if needed', 'For a crisis: pause scheduled content and agree one message'], check: ['Is it spreading?', 'Is it a legal issue?', 'Who speaks for the brand?'] });
  g('e_csat', { check: ['Ask once, after closing', 'Low score opens a follow-up'], tools: ['Surveys'] });
  g('e_rep', { how: ['Ask for reviews after delivery', 'Reply to reviews', 'Get permission, then repost customer content', 'Run groups and ambassador programmes'], tools: ['Reviews', 'Community'] });
  g('e_sen', { check: ['Overall sentiment', 'Sentiment per product', 'Top themes: quality, sizing, delivery', 'Sudden drops'], data: ['Reviews', 'Comments and mentions', 'Tickets', 'Surveys', 'Call transcripts'], tools: ['Sentiment tracking'], out: ['Sentiment report'] });
  g('s_tick', { holds: ['Customer and order', 'Channel', 'Messages', 'Priority and SLA', 'Status', 'Outcome and CSAT'] });

  /* ---------------- 10 Retention ---------------- */
  g('k_wel', { need: ['New customer', 'Consent'], how: ['Say thank you', 'Share how to use the product', 'Introduce the brand', 'Ask for feedback'], check: ['First use', 'Replies', 'Complaints'], tools: ['Lifecycle flows'] });
  g('k_rep', { need: ['Order history', 'Product links, such as what sells with what'], how: ['Remind at the usual reorder time', 'Suggest matching products', 'Offer an upgrade', 'Send renewal reminders'], check: ['Repeat rate', 'Time between orders', 'AOV'], data: ['CRM and customer database', 'Product and pricing analysis'], tools: ['Lifecycle flows'] });
  g('k_loy', { how: ['Set earn and reward rules', 'Give each customer a referral link', 'Reward after the return window', 'Watch for abuse'], tools: ['Loyalty and referrals'] });
  g('k_nps', { how: ['Ask would you recommend us?', 'Group answers as promoters, passives and detractors', 'Send themes back into research'], tools: ['Surveys'] });
  g('k_adv', { how: ['Pick happy customers from NPS and reviews', 'Ask for a testimonial', 'Get written permission', 'Invite them to refer or join'], tools: ['Reviews', 'Community'] });
  g('k_stop', { check: ['Past their usual reorder time', 'RFM score falling', 'No opens or clicks'], data: ['CRM and customer database'] });
  g('k_win', { how: ['Send a reminder', 'Ask why they left', 'Send an offer within margin', 'Stop messages if there is no response'], tools: ['Lifecycle flows'] });

  /* ---------------- 11 Measurement ---------------- */
  g('m_data', {
    data: ['Store: orders, returns, cancellations', 'Ads: Meta, Google, Amazon', 'Marketplaces: imported reports', 'Web: GA4, Search Console', 'Social: account insights', 'Messaging: sent, read, clicked', 'Support: tickets, CSAT, NPS', 'Courier: delivered and returned parcels'],
    how: ['Sync on schedule', 'Import marketplace files', 'Match ad platform numbers with real orders'],
    check: ['Data arrived for every source', 'Numbers match within the agreed range'],
    tools: ['Dashboards and reports', 'Commerce tracking']
  });
  g('m_dash', {
    check: ['Sales: revenue, orders, AOV', 'Ads: spend, ROAS, MER, CPA', 'Funnel: drop-off by stage', 'Channels: email, SMS, WhatsApp, social', 'Retention: repeat rate, LTV, churn'],
    how: ['Compare with target and last period', 'Flag anything that jumped or dropped'],
    tools: ['Dashboards and reports', 'Portfolio dashboard']
  });
  g('m_ai', {
    check: ['Traffic: did visits change?', 'Conversion: did the site or offer change?', 'Ads: did cost, creative or delivery change?', 'Stock: did products run out?', 'Tracking: did something break?', 'Competitors: new offers?', 'Season: festival or sale effects?'],
    how: ['AI checks each possible cause', 'AI states the likely cause and evidence', 'AI suggests a fix'],
    tools: ['Command Center', 'Dashboards and reports']
  });
  g('m_fix', { check: ['Evidence is real', 'Fix suits the budget and strategy', 'Client approval needed?'], how: ['Approve, change or reject', 'Record the reason'] });
  g('m_att', {
    need: ['Touchpoints per customer', 'Real orders', 'Competitor data'],
    how: ['Compare first-touch, last-touch and multi-touch', 'Compare with each ad platform\'s numbers', 'Use real revenue, after returns', 'Compare share of voice and prices with rivals'],
    check: ['Which channels start journeys', 'Which channels close sales', 'Which campaigns make real profit', 'Where the brand stands against rivals'],
    data: ['Touchpoints in the platform', 'Store orders', 'Ad platform reports', 'Competitor tracker'],
    tools: ['Attribution', 'Commerce tracking', 'Competitor tracker', 'Product and pricing analysis'],
    out: ['What drove sales', 'Competitor benchmark']
  });
  g('m_rep', {
    how: ['Pick the report and period', 'Pull the numbers', 'AI writes what happened, why, and what comes next'],
    check: ['Daily check', 'Client report: weekly and monthly', 'Business review: quarterly', 'Sales, ad conversion, campaign and channel reports', 'Funnel, product, customer and competitor reports', 'Portfolio and team reports'],
    tools: ['Dashboards and reports']
  });
  g('m_chk', { check: ['Numbers are correct', 'Causes are not guessed', 'Goals are shown against results', 'Next steps are clear'], how: ['Add notes and context', 'Approve the report'] });
  g('m_cli', { how: ['Receive the PDF or link', 'Review on a call', 'Agree next steps'], need: ['Invoice for the period, when due'], tools: ['Finance'] });
  g('m_task', { how: ['Turn each decision into a task', 'Set an owner and date', 'Record the decision'], tools: ['Tasks and projects'] });
  g('s_rep', { holds: ['Daily check', 'Client report', 'Business review', 'Sales report', 'Ad conversion report', 'Campaign report', 'Channel report', 'Funnel report', 'Product report', 'Customer report', 'Competitor report', 'Portfolio report', 'Team report'] });

  /* ---------------- 12 Optimization ---------------- */
  g('z_cmd', {
    check: ['Brand: profile, knowledge, ICPs', 'Goals: targets and the gap', 'Money: budget left, spend, margins, break-even ROAS', 'Results: campaigns, channels, ads, funnel drop-off', 'Products: best sellers, stock, pricing, returns', 'Customers: segments, repeat rate, reviews, sentiment', 'Market: competitors, keywords, seasons, festivals', 'Past work: what worked', 'Team: workload, tasks, approvals'],
    how: ['Ask a question, such as what should we do next month?', 'The agent reads the data', 'It finds the biggest gap', 'It suggests a plan with reasons and numbers'],
    tools: ['Command Center'],
    out: ['Plan to approve']
  });
  g('z_ok', { check: ['Data behind it is shown', 'Fits budget and margins', 'Team can deliver it'], how: ['Edit, approve or reject', 'Approved plans become draft campaigns and tasks'] });
  g('z_test', {
    need: ['One clear hypothesis', 'Enough traffic', 'A success metric'],
    check: ['Creatives: hooks, images, videos', 'Copy: headlines, CTAs', 'Audiences: segments and interests', 'Landing pages: layout, offers', 'Email: subject lines'],
    how: ['Test one thing at a time for A/B tests', 'Use multivariate tests only with high traffic', 'Run for a set time', 'Decide only when the result is reliable'],
    tools: ['Testing', 'Ads manager'],
    out: ['Winner and learning']
  });
  g('z_sug', { check: ['Real revenue by campaign', 'ROAS against break-even', 'Stock of promoted products', 'Budget left'], tools: ['Budget planner', 'Ads manager'] });
  g('z_scale', { check: ['Raise budgets in small steps', 'Stop losers', 'Stay inside the client limit', 'Watch results after each change'], tools: ['Ads manager'] });
  g('z_fresh', { check: ['Rising frequency', 'Falling CTR', 'Rising CPA'], how: ['Keep the winning idea', 'Change the first 3 seconds, image or copy'], tools: ['Content studio', 'Language generator'] });
  g('z_ref', { how: ['Remove poor audiences', 'Add lookalikes of best buyers', 'Add negative keywords', 'Update segments'], data: ['Search terms report', 'Audience reports', 'CRM and customer database'], tools: ['Segments', 'Ads manager', 'SEO tool'] });
  g('z_save', { how: ['Record what was tried', 'Record the result and why', 'Tag by channel and audience', 'Feed it into research and strategy'], tools: ['What worked library'] });
  g('z_ren', { check: ['Goals met', 'Business value delivered', 'Client health', 'Contract date'], tools: ['Growth tracker', 'Portfolio dashboard'] });
  g('z_off', { how: ['End staff access', 'Stop campaigns and automations', 'Export the client\'s data', 'Archive the workspace'], tools: ['Client workspaces', 'Access control'] });
  g('s_learn', { holds: ['What was tried', 'Result', 'Why it worked or failed', 'Channel and audience', 'Date'] });
  g('f_grow', { check: ['Business diagnostic: funnel, retention, unit economics, channels, store, brand', 'Goal gap: distance to target and what drives it', 'Business value: value delivered against fees'] });

  /* ---------------- records and events not covered above ---------------- */
  g('s_pipe', { holds: ['Lead source and contact', 'Stage, value and probability', 'Owner and next step', 'Proposal and contract', 'Sales forecast'] });
  g('s_access', { holds: ['Which team can enter each workspace', 'Each person\'s role', 'Start and end dates of access', 'Activity log: who did what, and when'] });
  g('d_out', { check: ['Ad platforms: Meta, Google, Amazon, LinkedIn', 'Social: Instagram, Facebook, YouTube', 'Messaging: email, SMS, WhatsApp, RCS', 'Marketplaces: Amazon, Flipkart, Meesho, Myntra'] });
  g('e_msg', { check: ['Instagram and Facebook comments', 'DMs and mentions', 'WhatsApp messages', 'Store chat and calls', 'Reviews on the store and marketplaces'] });

  /* ---------------- tools: how staff use each one ---------------- */
  g('f_pipe', { how: ['Add each new lead', 'Move deals across stages', 'Record value and next step', 'Read the sales forecast', 'Create proposals and contracts'] });
  g('f_access', { how: ['Assign teams to clients', 'Set each person\'s role', 'Give access that ends on a set date', 'Remove access at once when someone leaves'] });
  g('f_jour', { how: ['See each client\'s current stage', 'See what is blocked and who owns it', 'Open the tasks for the stage'] });
  g('f_disc', { how: ['Pick the form for the business type', 'Send by signed link', 'Review the answers', 'Mark unknowns'] });
  g('f_conn', { how: ['List each account', 'Send access requests', 'Watch status and renewal dates', 'Fix anything disconnected'] });
  g('f_res', { how: ['Save market notes with sources', 'Build keyword maps', 'Store listening findings', 'Draft the SWOT and insights report'] });
  g('f_comp', { how: ['Add rivals', 'Save their ads, prices and offers', 'Compare with the client', 'Read AI gap summaries', 'Get alerts on new offers'] });
  g('f_icp', { how: ['Read patterns from orders and reviews', 'Edit AI drafts', 'Mark confidence', 'Link ICPs to segments'] });
  g('f_strat', { how: ['Record positioning and messages', 'Set goals and KPIs', 'Build the funnel stage by stage', 'Send for sign-off'] });
  g('f_prof', { how: ['Enter price, cost, shipping, GST and fees', 'Add COD share and return rate', 'Read break-even ROAS and target CPA', 'Test what an offer does to profit'] });
  g('f_bud', { how: ['Create offers and set margin limits', 'Split budget by channel and month', 'Keep part for testing', 'Compare plan with actual spend'] });
  g('f_cal', { how: ['Add campaigns, festivals and launches', 'Spot clashes', 'Build go-to-market timelines', 'Set owners and checks'] });
  g('f_kit', { how: ['Store guidelines and voice', 'Set content pillars', 'Keep templates ready to use'] });
  g('f_asset', { how: ['Upload and tag files', 'Search by product or campaign', 'Record usage rights and expiry', 'Keep versions'] });
  g('f_setup', { how: ['Work through the list per service', 'Test tracking, sending and posting', 'See what is left', 'Record any waiver and its reason'] });
  g('f_crm', { how: ['Import customers and orders', 'View one profile per customer', 'See orders, messages and consent', 'Build segments'] });
  g('f_camp', { how: ['Choose the campaign type', 'Write the brief', 'Pick audience and channels', 'Set budget, dates and KPIs', 'Track results'] });
  g('f_studio', { how: ['Draft from a template', 'Save versions and comments', 'Edit copy and images quickly', 'Resize for each platform'] });
  g('f_lang', { how: ['Pick an approved master', 'Choose languages and dialects', 'Create versions', 'Send them for a person to check'] });
  g('f_auto', { how: ['Pick a trigger', 'Add steps in the visual editor, or ask Command Center', 'Add an exit rule', 'Test, then publish'] });
  g('f_appr', { how: ['Choose the approver', 'Send by link or WhatsApp', 'See who approved what and when', 'Chase late replies'] });
  g('f_soc', { how: ['Keep handles up to date', 'Schedule posts and reels', 'Read account insights', 'Review post and reel performance'] });
  g('f_msg', { how: ['Pick a template and audience', 'Send on email, SMS, WhatsApp or RCS', 'Read delivery and click results'] });
  g('f_ads', { how: ['Create and edit campaigns', 'Run tests on small budgets', 'Watch daily results', 'Approve budget changes'] });
  g('f_mkt', { how: ['Run Amazon ads directly', 'Import other marketplace reports', 'Record changes staff made by hand'] });
  g('f_cre', { how: ['Store creators and past work', 'Track projects and deliverables', 'Make affiliate links and codes', 'Track press, partners and events'] });
  g('f_seo', { how: ['Track keywords and rankings', 'Fix technical issues', 'Plan and publish blogs', 'Track AEO and GEO visibility'] });
  g('f_lead', { how: ['See each client\'s customer leads', 'Read scores and source', 'Follow up the hottest leads'] });
  g('f_bot', { how: ['Give it approved brand knowledge', 'Set when it hands over', 'Review its conversations and calls'] });
  g('f_cod', { how: ['See COD orders and risk', 'Confirm by WhatsApp or call', 'Read customer paths and heatmaps'] });
  g('f_box', { how: ['See all messages in one place', 'Assign to staff', 'Use AI drafts or reply by hand'] });
  g('f_tick', { how: ['Open and assign tickets', 'Track SLA and status', 'Escalate hard cases'] });
  g('f_rev', { how: ['Ask for reviews', 'Reply and collect customer content', 'Read sentiment overall and per product', 'Manage groups and ambassadors'] });
  g('f_life', { how: ['Turn on welcome, repeat and win-back flows', 'Set timing and offers', 'Read revenue per flow'] });
  g('f_loy', { how: ['Set points and rewards', 'Create referral links', 'Track redemptions'] });
  g('f_sur', { how: ['Send CSAT after tickets', 'Run NPS on a schedule', 'Read scores and comments'] });
  g('f_dash', { how: ['Read live numbers', 'Filter by channel and period', 'Schedule reports', 'Send as PDF or link'] });
  g('f_attr', { how: ['Compare first-touch, last-touch and multi-touch', 'Compare with platform numbers', 'See real revenue by product and channel'] });
  g('f_port', { how: ['See every client\'s health', 'Spot overdue work and renewals', 'Send invoices', 'See profit per client'] });
  g('f_task', { how: ['Plan on kanban boards', 'Set milestones and deadlines', 'See workload and performance'] });
  g('f_cmd', { how: ['Ask by prompt on the website or WhatsApp', 'Get answers, reports and plans', 'Build drafts, such as a campaign', 'Confirm before anything goes out'] });
  g('f_test', { how: ['Write a hypothesis', 'Set up the test', 'Read the result', 'Save the winner'] });
  g('f_work', { how: ['Save each learning', 'Search before planning', 'Feed learnings into strategy'] });

  /* ---------------- Customer journeys ---------------- */
  g('c_pick', {
    need: ['Signed strategy and ICP', 'Offer and margin limits', 'Channels with consent in place'],
    holds: ['New customer: ad, reel, creator or search to first order', 'Abandoned cart: left cart to finished order', 'Left at checkout: closed checkout to finished order', 'Welcome: first order to second order', 'Order updates: order placed to delivered', 'Issue resolution: complaint to happy customer', 'Review and customer content: delivered to review or photo', 'Repeat order: product due to run out', 'Win-back: no order for a set time', 'Campaign launch: first ad or message to campaign goal'],
    how: ['Pick the closest template and change the audience, wording and timing', 'Or start blank and add each step', 'Or describe it to AI and edit the draft'],
    tools: ['Journey builder', 'Command Center']
  });
  g('c_aud', { need: ['Start event: ad click, cart left, order placed, complaint or a set date', 'Segment and exclusions', 'Consent status per channel'], check: ['Who should not enter: recent buyers, open complaints, opted-out customers', 'How many people qualify today', 'Can a customer enter twice?'], tools: ['Journey builder', 'Segments', 'CRM and customer database'] });
  g('c_touch', { holds: ['Touchpoint: ad, reel, page, WhatsApp, email, SMS, RCS or call', 'Wait: minutes, hours or days', 'Decision: bought, clicked, replied or consented', 'End: bought, opted out or finished'], check: ['Each touchpoint has approved content', 'Waits suit the channel and quiet hours', 'WhatsApp uses an approved template outside 24 hours', 'Ad audiences match the journey step'], tools: ['Journey builder', 'Campaigns', 'Messaging', 'Ads manager'] });
  g('c_act', {
    holds: ['Sees an ad, no click: shows a different ad later, within a limit', 'Clicks, leaves product page: retargeting ad, plus a reminder if known', 'Adds to cart, leaves: reminder after a short wait', 'Leaves on checkout: WhatsApp, then email, then an offer if margin allows', 'Failed payment: new payment link and help', 'Asks a question: AI answers, staff if needed, next step holds', 'Complains: ticket opens, marketing pauses', 'Buys: this journey ends, order updates start', 'Opts out: messages stop at once', 'Does nothing: journey ends, later win-back'],
    how: ['Add one path for every action', 'Set a time limit on each wait', 'Check that buying always ends the journey'],
    tools: ['Journey builder', 'Automation builder']
  });
  g('c_warn', { check: ['Paths with no ending', 'Steps with no consent check', 'Messages with empty fields', 'Offers below the margin limit', 'Too many messages in one day'], tools: ['Journey builder'], out: ['A list of problems to fix before approval'] });
  g('c_ok', { check: ['Run a test customer down each path', 'Links open the right page', 'Saved carts load', 'The journey stops when a test order is placed', 'Opt-out works'], out: ['An approved journey version'], tools: ['Journey builder', 'Approvals'] });
  g('c_live', { check: ['Number entering in the first hour', 'Delivery on each channel', 'Errors in the run history'], tools: ['Campaigns', 'Journey builder'] });
  g('c_see', { data: ['Ad platforms: impressions and reach', 'Social: views and engagement', 'Search Console: search appearances'], tools: ['Ads manager', 'Social publisher', 'SEO tool'] });
  g('c_click', { data: ['UTM tags and ad click IDs tie the visit to the ad, ad set and campaign'], check: ['Link tags are on every ad', 'The landing page loads fast on a phone'], tools: ['Attribution', 'Behaviour tracking'] });
  g('c_ret', { need: ['Pixel audience of recent visitors', 'A set limit on how often the ad shows'], tools: ['Ads manager', 'Meta Ads Manager', 'Google Ads'] });
  g('c_cart', { data: ['Store events: product viewed, cart, checkout started', 'Web tracking: each step of the visit'], out: ['A card on the lead kanban board'], tools: ['Behaviour tracking', 'Lead tracker'] });
  g('c_left', { data: ['Checkout started with no order after the wait'], check: ['Did they buy another way?', 'Do we have a phone or email?', 'Have they consented?'], tools: ['Commerce tracking', 'Automation builder'] });
  g('c_rem', { how: ['Wait 30 minutes, send a WhatsApp reminder with the cart link', 'Wait 4 hours, send an email', 'Wait 24 hours, send an offer if margin allows', 'Stop as soon as they buy'], check: ['Consent on each channel', 'Quiet hours', 'Offer stays above break-even'], tools: ['Journey builder', 'Messaging', 'Offers'] });
  g('c_buy', { data: ['Store order matched by phone or email'], tools: ['Commerce tracking', 'CRM and customer database'] });
  g('c_order', { how: ['Send order confirmed, shipped, out for delivery and delivered', 'Start the welcome journey for first-time buyers', 'Ask for a review after delivery'], tools: ['Lifecycle flows', 'Reviews'] });
  g('c_win', { how: ['Tag the customer', 'Add them to the win-back segment'], tools: ['Segments', 'Lifecycle flows'] });
  g('c_issue', { how: ['AI reads the problem and looks up the order', 'AI solves simple cases, such as tracking a parcel', 'Other cases get a ticket, owner and time limit', 'Marketing pauses until the ticket closes', 'Send CSAT, then a review ask if the customer is happy'], tools: ['Support tickets', 'Order help', 'AI chat bot', 'Surveys'] });
  g('c_rep', { holds: ['People at each step', 'Where people leave', 'Sales and real revenue', 'Cost per sale'], how: ['Fix the step with the biggest drop', 'Save good journeys as templates, without customer data'], tools: ['Dashboards and reports', 'What worked library'] });
  g('f_jb', { how: ['Pick a template or start blank', 'Drag in touchpoints, waits and decisions', 'Add a next step for each customer action', 'Test, then send for approval'] });
  g('f_jrep', { how: ['Read people at each step', 'Find the biggest drop', 'Compare journeys'] });
  g('s_jour', { holds: ['Journey steps and versions', 'Approved by and date', 'Saved templates, with no customer data'] });

  /* ---------------- Daily brand work ---------------- */
  g('y_log', { how: ['Log in', 'See My workspaces: only your assigned clients', 'Click a client'], out: ['That client\'s task board'], tools: ['My workspaces', 'Access control'] });
  g('y_board', { holds: ['Columns: To do, In progress, In review, Waiting on client, Done', 'Card: task, owner, due date, client, files, comments'], how: ['See your own tasks first', 'Open a task and do the work', 'Move the card along the board', 'Reviewer checks cards in In review'], check: ['Overdue cards', 'Cards waiting on the client', 'Too many cards for one person'], tools: ['Tasks and projects', 'Team'] });
  g('y_sup', { need: ['Help center articles', 'Order, delivery and return data', 'Rules for moving hard cases up'], how: ['AI answers common questions', 'Staff take over with the full history', 'Set an owner, priority and time limit on tickets', 'Send CSAT after closing'], check: ['First reply time', 'Time to solve', 'Open tickets', 'Share solved by AI', 'CSAT', 'Most common problems'], tools: ['One inbox', 'Support tickets', 'Order help', 'Help center', 'Surveys'] });
  g('y_soc', { how: ['Manage: handles, profiles, bios, links, access, posts and replies', 'Analyse: best posts, formats, times and topics, compared with rivals', 'Track: followers, reach, engagement, saves, shares, link clicks, leads, sales and account health'], data: ['Instagram, Facebook, YouTube and LinkedIn insights', 'Store orders from social links'], tools: ['Social accounts', 'Social publisher', 'Social analytics', 'Competitor tracker'] });
  g('y_com', { how: ['Manage: products, prices, stock alerts, discounts, pop-ups, orders, COD and returns', 'Analyse: best sellers, weak products, pricing gaps, why carts are left', 'Track: orders, real revenue, AOV, conversion rate, left and recovered carts, repeat rate, returns, stock'], check: ['Client approves store changes', 'Offers stay above break-even'], data: ['Store orders and products', 'Marketplace reports'], tools: ['Commerce manager', 'Offers', 'COD tools', 'Commerce tracking'] });
  g('y_aud', {
    check: ['Performance: page speed on phone and desktop, large images, apps that slow the store', 'Mobile: pages easy to use on a phone', 'SEO: titles, descriptions, indexing, sitemaps, schema, broken links, product and collection pages', 'GEO: do AI tools name the brand, and which rivals do they name?', 'AEO: do search answers use the brand, and which sources are cited?', 'AI readability: can AI read the site easily?', 'Conversion: product pages, cart, checkout, trust, offers'],
    out: ['A score for each area and one overall grade', 'Each problem, why it matters, who fixes it and how long it takes', 'A report to download and share'],
    tools: ['Store audit', 'AI search tracker', 'SEO tool']
  });
  g('y_fix', { how: ['Rank fixes by value', 'Make a task for each fix', 'Ask the client before anything changes the store', 'Run the audit again each month and compare scores'], tools: ['Store audit', 'Tasks and projects', 'Approvals'] });
  g('y_beh', { holds: ['Traffic and where visitors came from', 'Each visit, step by step', 'Heatmaps of clicks and scrolling', 'Products viewed and added to cart', 'Funnel and checkout drop-off', 'Repeat visits and cohorts'], need: ['Cookie consent on the store', 'Tracking tag on every page'], how: ['Find where people leave', 'Fix pages people ignore', 'Update lead scores and segments', 'Start journeys from what customers do'], tools: ['Behaviour tracking', 'Testing'] });
  g('y_sen', { data: ['Comments, DMs and mentions', 'Reviews', 'Tickets and surveys', 'Call summaries'], how: ['AI marks each item positive, neutral or negative', 'AI adds the topic and product', 'Dashboards show the mood over time', 'Staff reply, open a ticket or start the crisis plan'], check: ['Sudden rise in negative mentions', 'Products with falling mood', 'Most common complaints'], tools: ['Sentiment tracking', 'One inbox', 'Dashboards and reports'] });
  g('y_ugc', { how: ['Find tagged posts, mentions and reviews with photos', 'Pick the best ones', 'Ask permission by DM or link', 'Save with usage rights', 'Use in posts, ads and product pages, with credit', 'Reward the customer if the brand wants to'], check: ['Permission on record', 'Where it may be used', 'Which pieces drove sales'], tools: ['Reviews', 'Customer content library', 'Loyalty and referrals'] });
  g('y_rev', { out: ['Support, social, commerce, behaviour and sentiment numbers in reports', 'Data for Command Center plans'], tools: ['Dashboards and reports', 'Command Center'] });
  g('f_my', { how: ['See your assigned clients', 'Click one to open its board'] });
  g('f_help', { how: ['Look up an order for a customer', 'Keep answers up to date', 'Let AI use the same answers'] });
  g('f_socan', { how: ['Read best posts and times', 'Compare accounts and rivals', 'Track growth and sales from social'] });
  g('f_comm', { how: ['See products, prices and stock', 'See orders and returns', 'Plan changes for client approval'] });
  g('f_sa', { how: ['Run the audit', 'Read scores and grade', 'Share the report', 'Turn fixes into tasks', 'Compare with the last audit'] });
  g('f_bs', { how: ['Read visits and heatmaps', 'Find drop-off', 'Read mood by product', 'Set alerts for sudden drops'] });
  g('s_ugc', { holds: ['Photo, video or post', 'Customer and source', 'Permission and date', 'Where it may be used'] });
  g('l_board', { holds: ['Columns: New, Contacted, Interested, Qualified, Cart or offer, Won, Lost', 'Card: name, source, score, owner, last contact'], how: ['Filter by score, source or owner', 'Call the hottest leads', 'Save a reason when a lead is lost'], tools: ['Lead tracker', 'Automation builder'] });

  (window.PROCESS.nodes || []).forEach(function (n) { if (G[n.id]) n.guide = G[n.id]; });
  window.__guideIds = Object.keys(G);
})();
