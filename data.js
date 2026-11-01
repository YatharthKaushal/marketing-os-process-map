/*
 * Marketing OS process map: the planned agency workflow, from winning a client to the next cycle.
 * Single graph (meta.single). Position = (stage, sub, lane). Section is always 'manual' (the one drawn section).
 * Stages are the brand journey (left to right). Lanes are who does the work (top to bottom).
 * Types: trigger | action | approve | doc | decision | external | gap | auto | store | feature
 *   auto = the platform does it · action = staff do it · approve/doc = staff or client decide or record
 *   external = client or outside account · gap = limit · store = record kept · feature = tool
 * Source: Marketing OS Simple SRS and Marketing OS HLD, MLD, LLD. `evidence` names the section of those docs.
 * The product is not built yet, so this map shows the plan, not code.
 */
(function () {
  var meta = {
    single: true, stageBase: 0, brand: 'Marketing OS', mark: 'MO', subtitle: 'Process map: brand journey and agency workflow',
    docHref: 'doc.html', docLabel: 'Document',
    topTitle: 'Brand journey (left to right) and agency workflow (top to bottom)',
    labels: {
      pains: 'Limits and open questions', automations: 'How AI helps', secTop: 'Planned', secBottom: 'Planned',
      touchTop: 'What gets recorded', touchBottom: 'What gets recorded', evidence: 'Source',
      featureWhy: 'What it solves', featureUsers: 'Steps that use it', featuresOn: 'Tools that help',
      statAuto: 'platform steps', statHuman: 'people steps', statGap: 'limits', bannerGap: 'limits',
      docResp: ' records this in ', touchLead: 'Staff ', gapResp: 'This is a platform limit or an open question. Staff work around it as described.',
      externalResp: ' act here, outside the platform.', storeResp: 'kept in the platform.',
      assumed: 'Added to complete the flow. Not stated in the docs.'
    },
    tags: { auto: '⚙ PLATFORM', gap: '✗ LIMIT', feature: '▣ TOOL' },
    typeName: { trigger: 'Start, end or event', action: 'Staff step', doc: 'Staff record work', approve: 'Decision or approval', decision: 'Decision', external: 'Client or outside account', gap: 'Limit', auto: 'Platform step', store: 'Record kept', feature: 'Tool' },
    role: {
      trigger: 'Marks where a flow starts, ends or an outcome is reached.',
      action: 'A step agency staff carry out.',
      doc: 'A step where staff record work in the platform.',
      approve: 'A checkpoint where a person decides or approves, and the answer is recorded.',
      external: 'A step outside the platform, such as a client action or an outside account.',
      gap: 'Something the platform cannot do, or a question still open.',
      auto: 'A step the platform runs, with AI where noted. People still decide anything important.',
      store: 'Where the record is kept.',
      feature: 'A tool staff use at this stage.'
    },
    decisionTop: 'A point where the flow branches, based on an answer or a check.',
    legend: [
      ['pill', '--bd:var(--fg-faint);--bg:var(--sunken)', 'Start, end or event'], ['', '', 'Staff step'],
      ['', '--bd:var(--warning-border);--bg:var(--warning-soft)', 'Staff record work'], ['dia', '--bd:var(--info);--bg:var(--info-soft)', 'Decision'],
      ['dash', '--bd:var(--fg-subtle)', 'Client or outside account'], ['dash', '--bd:var(--danger);--bg:var(--danger-soft)', 'Limit'],
      ['', '--bd:var(--accent-border);--bg:var(--accent-soft)', 'Platform step'], ['', '--bd:var(--success);--bg:var(--success-soft)', 'Approval'],
      ['loop', '', 'Loop or redo']
    ]
  };

  var stages = [
    { id: 0, label: 'Winning the client' }, { id: 1, label: 'Onboarding, discovery' }, { id: 2, label: 'Research' }, { id: 3, label: 'Strategy' },
    { id: 4, label: 'Brand kit' }, { id: 5, label: 'Infrastructure setup' }, { id: 6, label: 'Production' }, { id: 7, label: 'Distribution' },
    { id: 8, label: 'Leads and sales' }, { id: 9, label: 'Engagement' }, { id: 10, label: 'Retention' }, { id: 11, label: 'Measurement' }, { id: 12, label: 'Optimization' }
  ];
  var CLIENT = 0, CUST = 1, ACC = 2, STRAT = 3, CREA = 4, CHAN = 5, SUPP = 6, PLAT = 7, OUT = 8, REC = 9, TOOL = 10;
  var lanes = ['Client', 'Customers', 'Account team', 'Strategy', 'Creative', 'Media, channels', 'Sales, support', 'Marketing OS', 'Connected accounts', 'Records', 'Tools'];

  var pains = {
    G1: 'The platform cannot see who liked a post, so staff use comment replies',
    G2: 'Flipkart, Meesho and Myntra ads cannot be run directly, so staff import reports and apply changes by hand',
    G3: 'The platform cannot add trending music to reels, so staff post those by hand',
    G4: 'The platform cannot message strangers on Instagram, because a customer must message first',
    G5: 'Open question: is this for one agency, or sold to many?',
    G6: 'Open question: is India the first market?',
    G7: 'Open question: which languages come first?',
    G8: 'Open question: which product categories are allowed? Health products have WhatsApp limits',
    G9: 'Open question: do clients or the agency pay the ad platforms?',
    G10: 'Open question: does the agency or the brand handle sales calls?'
  };
  var automations = {
    I1: 'AI summarises public sources and lists opportunities', I2: 'AI drafts the SWOT', I3: 'AI drafts ICPs and personas from orders and reviews',
    I4: 'AI drafts a strategy, with reasons for each choice', I5: 'AI editor makes quick edits', I6: 'AI creates language and dialect versions, and resizes creatives',
    I7: 'AI drafts replies, with a manual option', I8: 'AI chat bot and voice agent answer customers', I9: 'AI explains what changed and suggests a fix',
    I10: 'AI writes a plain report summary', I11: 'AI suggests budget moves', I12: 'Command Center suggests a plan from nine areas of data'
  };

  var nodes = [], edges = [];
  function T(id, st, sub, lane, type, label, actor, summary, o) {
    var n = { id: id, section: 'manual', stage: st, sub: sub, lane: lane, type: type, label: label, actor: actor, summary: summary };
    for (var k in (o || {})) n[k] = o[k];
    nodes.push(n);
  }
  function E(from, to, o) {
    var e = { from: from, to: to, id: from + '>' + to };
    if (edges.some(function (x) { return x.id === e.id; })) e.id += '#2';
    for (var k in (o || {})) e[k] = o[k];
    edges.push(e);
  }
  function ex(o, x) { for (var k in x) o[k] = x[k]; return o; }
  function y(x) { return ex({ label: 'Yes' }, x || {}); }
  function n(x) { return ex({ label: 'No' }, x || {}); }
  function loop(l, x) { return ex({ kind: 'loop', label: l }, x || {}); }
  function tch(verb, doc, fields) { return { verb: verb, doc: doc, fields: fields }; }
  function S(id, st, sub, label, summary, ev) { T(id, st, sub, REC, 'store', label, 'Marketing OS', summary, { evidence: ev }); }
  function F(id, st, sub, label, why, users, ev) { T(id, st, sub, TOOL, 'feature', label, 'Agency staff', why, { why: why, users: users, evidence: ev }); }
  function J(s) { return 'Simple SRS, section 2: ' + s; }

  /* ---------------- 0 Winning the client ---------------- */
  T('w_need', 0, 0, CLIENT, 'trigger', 'A brand needs marketing', 'Brand', 'A brand or e-commerce store looks for an agency.', { evidence: J('Before stage 1') });
  T('w_call', 0, 1, ACC, 'action', 'Find the lead, hold a sales call', 'Sales', 'The agency tracks this brand as its own lead in the Sales pipeline.', { evidence: J('Before stage 1') });
  T('w_prop', 0, 2, ACC, 'doc', 'Send proposal and contract', 'Sales', 'The Sales pipeline tracks the deal, forecasts sales, and creates the proposal and contract.', { evidence: J('Before stage 1'), touch: tch('record', 's_pipe', ['Deal', 'Value', 'Stage']) });
  T('w_sign', 0, 3, CLIENT, 'decision', 'Client signs?', 'Client', 'The client agrees and signs, or the deal is lost.', { evidence: J('Before stage 1') });
  T('w_lost', 0, 4, ACC, 'trigger', 'Deal lost', 'Sales', 'The deal is closed as lost.', { evidence: J('Before stage 1') });
  T('w_ws', 0, 4, PLAT, 'auto', 'Create the client and workspace', 'Marketing OS', 'A private workspace is created. Only owners and operators can enter at first.', { evidence: 'Simple SRS, section 1: Workspaces', pains: ['G5'] });
  T('w_team', 0, 5, ACC, 'approve', 'Operator assigns the team', 'Operator', 'The assigned team can now enter the workspace. Others cannot see it.', { evidence: 'Simple SRS, section 7: Giving staff access', touch: tch('assign', 's_access', ['Team', 'Client', 'Roles']) });
  S('s_pipe', 0, 2, 'Deals and proposals', 'The agency\'s own leads and deals.', J('Before stage 1'));
  S('s_access', 0, 5, 'Staff access and activity log', 'Who can enter each workspace, and who did what and when.', 'Simple SRS, section 1: Workspaces');
  F('f_pipe', 0, 2, 'Sales pipeline', 'Tracks the agency\'s own leads for new clients, and forecasts sales.', ['w_call', 'w_prop'], 'Simple SRS, section 3: Run the agency');
  F('f_access', 0, 5, 'Access control', 'Lets staff see only their assigned clients.', ['w_team'], 'Simple SRS, section 3: Run the agency');
  E('w_need', 'w_call'); E('w_call', 'w_prop'); E('w_prop', 'w_sign', { handoff: 'Proposal and contract' }); E('w_sign', 'w_lost', n()); E('w_sign', 'w_ws', y()); E('w_ws', 'w_team');

  /* ---------------- 1 Onboarding and discovery ---------------- */
  T('o_kick', 1, 0, ACC, 'action', 'Kickoff call: goals, team, approvers', 'Account manager', 'The agency and client agree goals, the team, who approves work, and how often they talk.', { evidence: J('Stage 1, Step 1') });
  T('o_form', 1, 1, PLAT, 'auto', 'Send discovery form by link', 'Marketing OS', 'The client fills the form without logging in.', { evidence: J('Stage 1, Step 2') });
  T('o_fill', 1, 2, CLIENT, 'external', 'Client fills the brand form', 'Client', 'Covers business, products, goals, customers, brand, assets, past results, competitors and limits.', { evidence: J('Stage 1, Step 2') });
  T('o_disc', 1, 2, ACC, 'action', 'Brand discovery call', 'Account manager', 'The team fills the gaps in the form by talking to the client.', { evidence: J('Stage 1, Step 2') });
  T('o_prof', 1, 3, ACC, 'doc', 'Complete the brand profile', 'Account manager', 'All discovery answers go into one profile.', { evidence: J('Stage 1, Step 2'), touch: tch('record', 's_prof', ['Business', 'Products', 'Goals', 'Customers', 'Brand', 'Assets', 'Past results', 'Competitors', 'Limits']) });
  T('o_give', 1, 3, CLIENT, 'external', 'Client gives access to accounts', 'Client', 'The client gives access to every place the brand exists.', { evidence: J('Stage 1, Step 3') });
  T('o_conn', 1, 4, PLAT, 'auto', 'Connections shows linked and pending', 'Marketing OS', 'Links each account and shows what is still pending.', { evidence: J('Stage 1, Step 3') });
  T('o_acct', 1, 4, OUT, 'external', 'Stores, marketplaces, social, ads, data, messaging', 'Outside accounts', 'Shopify, Instagram store, Amazon, Meta, Google, Analytics, Tag Manager, email domain, WhatsApp and SMS.', { evidence: J('Stage 1, Step 3') });
  T('g_mkt', 1, 5, OUT, 'gap', 'Flipkart, Meesho, Myntra: no direct ads link', 'Staff work around it', 'Staff import reports and apply changes by hand.', { evidence: 'Simple SRS, section 8: Things the platform can\'t do', pains: ['G2'] });
  T('o_audit', 1, 5, PLAT, 'auto', 'Audit store, tracking, ads, social, reviews', 'Marketing OS', 'The Audit tool runs the checks and lists what to fix.', { evidence: J('Stage 1, Step 4') });
  T('o_rev', 1, 6, STRAT, 'action', 'Team finds what is broken and working', 'Strategist', 'The team reads the audit and notes what to fix first.', { evidence: J('Stage 1, Step 4') });
  T('o_bk', 1, 7, STRAT, 'doc', 'Fill the brand knowledge base', 'Strategist', 'Staff and AI then work from one set of facts.', { evidence: J('Stage 1, Step 5'), touch: tch('record', 's_bk', ['Profile', 'Audit findings', 'Brand facts']) });
  T('o_ok', 1, 8, CLIENT, 'decision', 'Client confirms profile and audit?', 'Client', 'The stage ends when the client confirms both are correct.', { evidence: J('Stage 1') });
  S('s_prof', 1, 3, 'Brand profile', 'One profile for the brand.', J('Stage 1, Step 2'));
  S('s_bk', 1, 7, 'Brand knowledge', 'Every fact about the brand, used by staff and AI.', J('Stage 1, Step 5'));
  F('f_jour', 1, 0, 'Journey tracker', 'Shows which stage each client is at and what is blocked.', ['o_kick'], 'Simple SRS, section 3: Run the agency');
  F('f_disc', 1, 2, 'Discovery form', 'Collects the brand profile from the client.', ['o_form', 'o_fill', 'o_prof'], 'Simple SRS, section 3: Know the brand');
  F('f_conn', 1, 4, 'Connections', 'Links stores, marketplaces, social and ad accounts.', ['o_conn', 'o_give'], 'Simple SRS, section 3: Know the brand');
  F('f_audit', 1, 5, 'Audit tool', 'Checks store, SEO, tracking, ads and social.', ['o_audit', 'o_rev'], 'Simple SRS, section 3: Know the brand');
  F('f_bk', 1, 7, 'Brand knowledge base', 'Holds every fact about the brand.', ['o_bk'], 'Simple SRS, section 3: Know the brand');
  E('w_team', 'o_kick', { handoff: 'Client and team' }); E('o_kick', 'o_form'); E('o_form', 'o_fill', { handoff: 'Signed link' }); E('o_kick', 'o_disc');
  E('o_fill', 'o_prof'); E('o_disc', 'o_prof'); E('o_prof', 'o_give'); E('o_give', 'o_conn', { handoff: 'Access' }); E('o_conn', 'o_acct'); E('o_acct', 'g_mkt'); E('o_conn', 'o_audit');
  E('o_audit', 'o_rev'); E('o_rev', 'o_bk'); E('o_bk', 'o_ok'); E('o_ok', 'o_prof', loop('Fix', { label: 'No, fix it' }));

  /* ---------------- 2 Research ---------------- */
  T('r_mkt', 2, 0, STRAT, 'action', 'Market research: size, trends, demand', 'Strategist', 'Covers market size, trends, seasonality and demand.', { evidence: 'Simple SRS, section 4: Market research', automations: ['I1'] });
  T('r_comp', 2, 1, STRAT, 'action', 'Competitor research', 'Strategist', 'Records positioning, prices, channels, content and reviews, then compares each rival with the client.', { evidence: 'Simple SRS, section 4: Competitor research', automations: ['I1'] });
  T('r_lib', 2, 1, OUT, 'external', 'Public ad libraries', 'Outside sources', 'Show rival ads where available. Staff add the rest by hand.', { evidence: 'Simple SRS, section 4: Competitor research' });
  T('r_kw', 2, 2, STRAT, 'action', 'Keywords and social listening', 'Strategist', 'Shows what people search for and why, and what they say about the brand and category.', { evidence: 'Simple SRS, section 4: Market research' });
  T('r_swot', 2, 2, PLAT, 'auto', 'AI drafts a SWOT and opportunities', 'Marketing OS', 'SWOT lists the brand\'s Strengths, Weaknesses, Opportunities and Threats.', { evidence: 'Simple SRS, section 4: Market research', automations: ['I2'] });
  T('r_icpai', 2, 3, PLAT, 'auto', 'Read orders and reviews, draft ICPs', 'Marketing OS', 'Finds the best buyers: those who spend more, buy again and return less.', { evidence: 'Simple SRS, section 4: Building the ICP', automations: ['I3'] });
  T('r_icp', 2, 4, STRAT, 'doc', 'Finish ICPs, personas, journey map', 'Strategist', 'Adds demographics, psychographics, pain points, objections and buying triggers.', { evidence: J('Stage 2'), touch: tch('record', 's_icp', ['ICP', 'Personas', 'Customer journey']) });
  T('r_ok', 2, 5, CLIENT, 'decision', 'Client confirms ICP?', 'Client', 'The client reviews and confirms who the best buyers are.', { evidence: J('Stage 2') });
  T('r_rep', 2, 6, STRAT, 'approve', 'Strategist approves insights report', 'Strategist', 'The research is finished and ready for strategy.', { evidence: 'Simple SRS, section 4: Market research', touch: tch('approve', 's_ins', ['Insights', 'Personas', 'Competitor map', 'Opportunities']) });
  S('s_icp', 2, 4, 'ICPs and personas', 'Descriptions of the best buyers.', J('Stage 2'));
  S('s_ins', 2, 6, 'Insights report', 'The findings and opportunities.', J('Stage 2'));
  F('f_res', 2, 0, 'Research workspace', 'Holds market, keyword and customer research.', ['r_mkt', 'r_kw'], 'Simple SRS, section 3: Know the brand');
  F('f_comp', 2, 1, 'Competitor tracker', 'Tracks rivals, compares them, and gives AI summaries.', ['r_comp'], 'Simple SRS, section 3: Know the brand');
  F('f_icp', 2, 3, 'ICP builder', 'Defines the best buyers and personas.', ['r_icpai', 'r_icp'], 'Simple SRS, section 3: Know the brand');
  E('o_ok', 'r_mkt', y({ handoff: 'Brand profile, audit' })); E('r_mkt', 'r_comp'); E('r_lib', 'r_comp'); E('r_comp', 'r_kw'); E('r_kw', 'r_swot'); E('r_swot', 'r_icpai'); E('r_icpai', 'r_icp');
  E('r_icp', 'r_ok'); E('r_ok', 'r_icp', loop('No, adjust')); E('r_ok', 'r_rep', y());

  /* ---------------- 3 Strategy ---------------- */
  T('t_draft', 3, 0, PLAT, 'auto', 'Gather research, draft a strategy', 'Marketing OS', 'Brings together the profile, audit, research, competitors, ICP and margins.', { evidence: 'Simple SRS, section 4: Building the strategy', automations: ['I4'] });
  T('t_pos', 3, 1, STRAT, 'action', 'Positioning, value proposition, message', 'Strategist', 'Decides who this is for, why it is different, and what proof backs it.', { evidence: J('Stage 3') });
  T('t_goal', 3, 2, STRAT, 'action', 'SMART goals, north-star metric, KPIs', 'Strategist', 'Sets the numbers to aim for at each funnel stage.', { evidence: J('Stage 3') });
  T('t_fun', 3, 3, STRAT, 'action', 'Funnel, channels, demography, content', 'Strategist', 'For each funnel stage: audience, message, channel, content and offer.', { evidence: 'Simple SRS, section 4: Building the funnel' });
  T('t_gapchk', 3, 3, PLAT, 'auto', 'Warn if a funnel stage is empty', 'Marketing OS', 'Warns if any stage has nothing planned.', { evidence: 'Simple SRS, section 4: Building the funnel' });
  T('t_prof', 3, 4, PLAT, 'auto', 'Profit check: break-even ROAS', 'Marketing OS', 'Shows the ROAS needed to break even, and what the brand can spend.', { evidence: 'Simple SRS, section 4: Building the strategy' });
  T('t_plan', 3, 4, STRAT, 'action', 'Offers, budget, calendar, launch plans', 'Strategist', 'Includes discounts, bundles, festivals and go-to-market plans.', { evidence: J('Stage 3') });
  T('t_rev', 3, 5, ACC, 'approve', 'Director reviews the plan', 'Director', 'An internal check before the client sees it.', { evidence: 'Simple SRS, section 4: Building the strategy', touch: tch('review', 's_strat', ['Strategy', 'Budget', 'Calendar']) });
  T('t_sign', 3, 6, CLIENT, 'decision', 'Client signs the plan?', 'Client', 'All later work must follow the signed plan.', { evidence: J('Stage 3') });
  T('t_turn', 3, 7, PLAT, 'auto', 'Turn plan into campaigns and tasks', 'Marketing OS', 'The approved plan becomes draft campaigns and tasks.', { evidence: 'Simple SRS, section 4: Building the strategy' });
  S('s_strat', 3, 6, 'Signed strategy', 'The plan all work follows. Work outside it gets flagged.', J('Stage 3'));
  F('f_strat', 3, 1, 'Strategy builder', 'Records positioning, goals, channels and the funnel, with a funnel builder.', ['t_pos', 't_goal', 't_fun'], 'Simple SRS, section 3: Plan');
  F('f_prof', 3, 3, 'Profit calculator', 'Shows margin and the ROAS needed to break even.', ['t_prof'], 'Simple SRS, section 3: Plan');
  F('f_bud', 3, 4, 'Offers and budget planner', 'Creates offers, protects margin, and splits money across channels and months.', ['t_plan'], 'Simple SRS, section 3: Plan');
  F('f_cal', 3, 5, 'Marketing calendar, launch planner', 'Plans campaigns, launches and festivals, with go-to-market timelines.', ['t_plan'], 'Simple SRS, section 3: Plan');
  E('r_rep', 't_draft', { handoff: 'Insights, ICPs' }); E('t_draft', 't_pos'); E('t_pos', 't_goal'); E('t_goal', 't_fun'); E('t_fun', 't_gapchk'); E('t_fun', 't_plan'); E('t_gapchk', 't_prof'); E('t_prof', 't_plan');
  E('t_plan', 't_rev'); E('t_rev', 't_sign'); E('t_sign', 't_fun', loop('No, rework')); E('t_sign', 't_turn', y());

  /* ---------------- 4 Brand kit ---------------- */
  T('b_kit', 4, 0, CREA, 'action', 'Guidelines, voice, content pillars', 'Creative team', 'Covers logo use, colours, typography, imagery, and 3 to 6 content pillars.', { evidence: J('Stage 4') });
  T('b_tpl', 4, 1, CREA, 'doc', 'Templates and asset library', 'Creative team', 'Templates for posts, ads, emails and presentations, plus images, videos and product shots.', { evidence: J('Stage 4'), touch: tch('record', 's_kit', ['Guidelines', 'Templates', 'Assets']) });
  T('b_ok', 4, 2, CLIENT, 'decision', 'Client approves the kit?', 'Client', 'The stage ends when the kit is approved.', { evidence: J('Stage 4') });
  S('s_kit', 4, 1, 'Brand kit and assets', 'Everything that keeps work on-brand.', J('Stage 4'));
  F('f_kit', 4, 0, 'Brand kit', 'Holds guidelines, voice, content themes and templates.', ['b_kit'], 'Simple SRS, section 3: Create');
  F('f_asset', 4, 1, 'Asset library', 'Stores all images and videos, with usage rights.', ['b_tpl'], 'Simple SRS, section 3: Create');
  E('t_turn', 'b_kit', { handoff: 'Signed strategy' }); E('b_kit', 'b_tpl'); E('b_tpl', 'b_ok'); E('b_ok', 'b_kit', loop('No, change'));

  /* ---------------- 5 Infrastructure setup ---------------- */
  T('i_track', 5, 0, CHAN, 'action', 'Add tracking, set UTM rules', 'Channel team', 'Analytics, GTM, pixels, meta tags and conversion events.', { evidence: J('Stage 5') });
  T('i_seo', 5, 1, CHAN, 'action', 'Fix technical SEO, build landing pages', 'Channel team', 'Site speed, indexing, schema and sitemaps, plus pages built to sell.', { evidence: J('Stage 5') });
  T('i_send', 5, 2, CHAN, 'action', 'Set up senders, lists and consent', 'Channel team', 'Sender domains, SMS and WhatsApp senders, contact lists, cookie consent, privacy policy and opt-ins.', { evidence: J('Stage 5'), pains: ['G6'] });
  T('i_crm', 5, 2, PLAT, 'auto', 'Import customers into the CRM', 'Marketing OS', 'One profile per customer, with orders, messages and consent.', { evidence: J('Stage 5') });
  T('i_own', 5, 3, CLIENT, 'external', 'Client approves owner-only steps', 'Client', 'Some steps need the owner, such as a business verification.', { evidence: J('Stage 5') });
  T('i_list', 5, 3, CHAN, 'action', 'Verify accounts, update listings', 'Channel team', 'Business accounts and listings such as Google Business Profile.', { evidence: J('Stage 5') });
  T('i_test', 5, 4, PLAT, 'auto', 'Test tracking, sending and posting', 'Marketing OS', 'Proves that everything works before any campaign runs.', { evidence: J('Stage 5') });
  T('i_pass', 5, 5, ACC, 'decision', 'All checks pass?', 'Account manager', 'Nothing launches until the tests pass.', { evidence: J('Stage 5') });
  S('s_crm', 5, 2, 'CRM and customer database', 'One profile per customer that every stage reads and updates.', J('Stage 5'));
  F('f_setup', 5, 0, 'Setup checklist', 'Shows what is left, and proves the data is right.', ['i_track', 'i_seo', 'i_list', 'i_test'], J('Stage 5'));
  F('f_crm', 5, 2, 'CRM and customer database', 'Keeps one profile per customer, with orders, messages and consent.', ['i_crm'], 'Simple SRS, section 3: Keep customers');
  E('b_ok', 'i_track', y({ handoff: 'Brand kit' })); E('i_track', 'i_seo'); E('i_seo', 'i_send'); E('i_send', 'i_crm'); E('i_send', 'i_list'); E('i_own', 'i_list'); E('i_crm', 'i_test'); E('i_list', 'i_test'); E('i_test', 'i_pass'); E('i_pass', 'i_track', loop('No, fix'));

  /* ---------------- 6 Production ---------------- */
  T('p_brief', 6, 0, ACC, 'doc', 'Write the campaign brief', 'Account manager', 'A campaign can be ads, a broadcast, an automated flow, a voice campaign, or a mix.', { evidence: 'Simple SRS, section 2: Stage 6, What counts as a campaign', touch: tch('record', 's_camp', ['Goal', 'Audience', 'Channels', 'Content', 'Budget', 'Dates']) });
  T('p_cal', 6, 1, CHAN, 'action', 'Pick audience, channels, calendar', 'Channel team', 'Every campaign has a goal, audience, channels, content, budget, dates and results.', { evidence: J('Stage 6') });
  T('p_make', 6, 2, CREA, 'action', 'Create copy, designs, videos, long-form', 'Creative team', 'Ads, captions, emails, scripts, carousels, reels, explainers, guides, whitepapers and case studies.', { evidence: J('Stage 6'), automations: ['I5'] });
  T('p_flow', 6, 2, CHAN, 'action', 'Build automated flows', 'Channel team', 'Abandoned cart, welcome and win-back flows, in a visual editor or by prompt.', { evidence: 'Simple SRS, section 3: Sell and support' });
  T('p_lang', 6, 3, PLAT, 'auto', 'AI resizes and translates', 'Marketing OS', 'One approved English creative becomes versions for each platform, language and dialect.', { evidence: 'Simple SRS, section 7: Language versions', automations: ['I6'], pains: ['G7'] });
  T('p_chk', 6, 4, CREA, 'approve', 'Person checks each version', 'Creative team', 'Each language version is checked before use.', { evidence: 'Simple SRS, section 7: Language versions', touch: tch('approve', 's_camp', ['Language version']) });
  T('p_head', 6, 5, CREA, 'approve', 'Creative head: brand and legal check', 'Creative head or director', 'Each piece passes a brand check and a legal check.', { evidence: 'Simple SRS, section 7: Content approval', touch: tch('approve', 's_camp', ['Draft', 'Brand check', 'Legal check']) });
  T('p_need', 6, 6, ACC, 'decision', 'Client must approve?', 'Account manager', 'Not everything needs the client.', { evidence: 'Simple SRS, section 7: Content approval' });
  T('p_cli', 6, 7, CLIENT, 'external', 'Client approves by link or WhatsApp', 'Client', 'The client approves or asks for changes, without logging in.', { evidence: 'Simple SRS, section 7: Content approval' });
  T('p_sch', 6, 8, PLAT, 'auto', 'Schedule the campaign', 'Marketing OS', 'Approved content is scheduled.', { evidence: J('Stage 6') });
  S('s_camp', 6, 0, 'Campaigns and content', 'Briefs, versions, approvals and schedules.', J('Stage 6'));
  F('f_camp', 6, 0, 'Campaigns', 'Creates any campaign across ads, email, SMS, WhatsApp, RCS and voice.', ['p_brief', 'p_cal'], 'Simple SRS, section 3: Create');
  F('f_studio', 6, 2, 'Content studio and AI editor', 'Drafts, versions, revisions, comments and quick edits, on phone or desktop.', ['p_make'], 'Simple SRS, section 3: Create');
  F('f_lang', 6, 3, 'Language generator', 'Turns one approved creative into other languages and dialects.', ['p_lang', 'p_chk'], 'Simple SRS, section 3: Create');
  F('f_auto', 6, 4, 'Automation builder', 'Builds the automated flows inside a campaign, in a visual editor or by prompt.', ['p_flow'], 'Simple SRS, section 3: Sell and support');
  F('f_appr', 6, 7, 'Approvals', 'Sends work to clients and records their answer.', ['p_cli', 'p_head'], 'Simple SRS, section 3: Run the agency');
  E('i_pass', 'p_brief', y({ handoff: 'A working stack' })); E('p_brief', 'p_cal'); E('p_cal', 'p_make'); E('p_cal', 'p_flow'); E('p_make', 'p_lang'); E('p_flow', 'p_head'); E('p_lang', 'p_chk'); E('p_chk', 'p_head');
  E('p_head', 'p_need'); E('p_need', 'p_cli', y()); E('p_need', 'p_sch', n()); E('p_cli', 'p_sch', { label: 'Approved' }); E('p_cli', 'p_make', loop('Changes'));

  /* ---------------- 7 Distribution ---------------- */
  T('d_soc', 7, 0, CHAN, 'action', 'Manage social accounts', 'Channel team', 'Profile, bio, links, verification, access and monthly insights.', { evidence: 'Simple SRS, section 7: Social account management' });
  T('d_pub', 7, 0, PLAT, 'auto', 'Publish posts and reels', 'Marketing OS', 'Posts the content calendar on each connected handle.', { evidence: J('Stage 7') });
  T('d_msg', 7, 1, PLAT, 'auto', 'Send email, SMS, WhatsApp, RCS, voice', 'Marketing OS', 'Broadcasts and automated flows go out on each channel, after a consent check.', { evidence: J('Stage 7'), pains: ['G8'] });
  T('d_ads', 7, 1, CHAN, 'action', 'Launch ads on small test budgets', 'Media buyer', 'Search, social, display, retargeting and affiliates.', { evidence: 'Simple SRS, section 7: Ad launch and scaling' });
  T('d_bud', 7, 2, CLIENT, 'external', 'Client approves budget changes', 'Client', 'Needed when a budget change requires it.', { evidence: J('Stage 7'), pains: ['G9'] });
  T('d_earn', 7, 2, CHAN, 'action', 'Creators, PR, partners, events', 'Channel team', 'Influencers, media outreach, co-marketing, webinars and local events.', { evidence: J('Stage 7') });
  T('d_mkt', 7, 3, CHAN, 'action', 'Marketplace ads', 'Media buyer', 'Amazon runs directly. Other marketplaces use imported reports.', { evidence: 'Simple SRS, section 3: Reach customers', pains: ['G2'] });
  T('d_out', 7, 3, OUT, 'external', 'Ad platforms, social, carriers, marketplaces', 'Outside accounts', 'Where campaigns actually run.', { evidence: J('Stage 7') });
  T('g_reel', 7, 4, CHAN, 'gap', 'Trending-music reels posted by hand', 'Staff work around it', 'The platform cannot add trending music to reels.', { evidence: 'Simple SRS, section 8: Things the platform can\'t do', pains: ['G3'] });
  T('d_daily', 7, 5, CHAN, 'action', 'Check results daily', 'Media buyer', 'The team watches every live campaign.', { evidence: J('Stage 7') });
  T('d_cust', 7, 5, CUST, 'trigger', 'Customers see the brand', 'Customers', 'Campaigns are live and tracked.', { evidence: J('Stage 7') });
  F('f_soc', 7, 0, 'Social accounts and publisher', 'Manages each handle, posts reels and posts, and shows insights.', ['d_soc', 'd_pub'], 'Simple SRS, section 3: Reach customers');
  F('f_msg', 7, 1, 'Messaging', 'Sends email, SMS, WhatsApp and RCS.', ['d_msg'], 'Simple SRS, section 3: Sell and support');
  F('f_ads', 7, 2, 'Ads manager', 'Runs ad accounts and the ad side of campaigns, and tests and scales them.', ['d_ads', 'd_daily'], 'Simple SRS, section 3: Reach customers');
  F('f_mkt', 7, 3, 'Marketplace manager', 'Runs Amazon ads, and imports reports from other marketplaces.', ['d_mkt'], 'Simple SRS, section 3: Reach customers');
  F('f_cre', 7, 4, 'Creator manager, PR and events', 'Stores influencers and creators, tracks projects, makes affiliate links, and tracks press and events.', ['d_earn'], 'Simple SRS, section 3: Reach customers');
  F('f_seo', 7, 5, 'SEO tool', 'Handles SEO, AEO, GEO and blogs.', ['d_pub'], 'Simple SRS, section 3: Reach customers');
  E('p_sch', 'd_pub', { handoff: 'Scheduled campaigns' }); E('p_sch', 'd_soc'); E('p_sch', 'd_ads'); E('d_soc', 'd_earn'); E('d_pub', 'd_msg'); E('d_msg', 'd_out'); E('d_bud', 'd_ads', loop('Approved')); E('d_ads', 'd_mkt'); E('d_mkt', 'd_out'); E('d_earn', 'g_reel'); E('d_mkt', 'g_reel'); E('g_reel', 'd_daily'); E('d_out', 'd_daily'); E('d_daily', 'd_cust');

  /* ---------------- 8 Leads and sales ---------------- */
  T('l_sig', 8, 0, CUST, 'trigger', 'Visit, CTA click, left cart, comment, question', 'Customers', 'A lead is anyone showing interest.', { evidence: J('Stage 8') });
  T('l_cap', 8, 1, PLAT, 'auto', 'Capture, enrich and score the lead', 'Marketing OS', 'Adds missing details and scores by fit and behaviour. This tracks the client\'s customers, not the agency\'s own leads.', { evidence: J('Stage 8') });
  T('g_like', 8, 1, OUT, 'gap', 'Cannot see who liked a post', 'Staff work around it', 'Staff use comment replies instead.', { evidence: 'Simple SRS, section 8: Things the platform can\'t do', pains: ['G1'] });
  T('l_ok', 8, 2, PLAT, 'decision', 'Consent given, not yet bought?', 'Marketing OS', 'No message goes out without consent, and the flow stops if they already bought.', { evidence: 'Simple SRS, section 7: Abandoned cart' });
  T('l_send', 8, 3, PLAT, 'auto', 'Send reminder, then offer', 'Marketing OS', 'WhatsApp, email or SMS reminders, followed by another reminder or offer.', { evidence: 'Simple SRS, section 7: Abandoned cart' });
  T('l_ai', 8, 4, PLAT, 'auto', 'AI chat bot and voice agent answer', 'Marketing OS', 'Answers on the website, WhatsApp, Instagram and phone.', { evidence: J('Stage 8'), automations: ['I8'] });
  T('l_big', 8, 5, SUPP, 'decision', 'Needs a salesperson?', 'Sales agent', 'Big deals go to a person.', { evidence: J('Stage 8') });
  T('l_sal', 8, 6, SUPP, 'action', 'Sales agent follows up', 'Sales agent', 'Takes the conversation from the AI.', { evidence: J('Stage 8'), pains: ['G10'] });
  T('l_buy', 8, 7, CUST, 'decision', 'Customer buys?', 'Customers', 'The stage ends when the lead buys or is marked lost.', { evidence: J('Stage 8') });
  T('l_cod', 8, 8, PLAT, 'auto', 'Confirm COD order, score risk', 'Marketing OS', 'The customer confirms by WhatsApp or call. Risky orders are checked or blocked.', { evidence: 'Simple SRS, section 7: COD order' });
  T('l_won', 8, 9, CUST, 'trigger', 'A sale', 'Customers', 'The customer has bought.', { evidence: J('Stage 8') });
  T('l_cro', 8, 8, CHAN, 'action', 'Improve pages and checkout', 'Channel team', 'Uses heatmaps and A/B tests to find what to fix.', { evidence: J('Stage 8') });
  F('f_lead', 8, 1, 'Lead tracker', 'Tracks each client\'s customer leads, such as store visitors, left carts and people sent a reminder.', ['l_cap'], 'Simple SRS, section 3: Sell and support');
  F('f_bot', 8, 4, 'AI chat bot and voice agent', 'Answers on the website, WhatsApp and Instagram, and takes and makes phone calls.', ['l_ai'], 'Simple SRS, section 3: Sell and support');
  F('f_cod', 8, 8, 'COD tools, behaviour tracking', 'Confirms cash orders, reduces returned parcels, and shows paths and heatmaps.', ['l_cod', 'l_cro'], 'Simple SRS, section 3');
  E('d_cust', 'l_sig', { handoff: 'Interest' }); E('l_sig', 'l_cap'); E('g_like', 'l_cap', { label: 'Comments instead' }); E('l_cap', 'l_ok'); E('l_ok', 'l_send', y()); E('l_send', 'l_ai'); E('l_ai', 'l_big'); E('l_big', 'l_sal', y()); E('l_big', 'l_buy', n()); E('l_sal', 'l_buy'); E('l_buy', 'l_send', loop('No, nurture')); E('l_buy', 'l_cod', y()); E('l_cod', 'l_won'); E('l_buy', 'l_cro', { label: 'Learn why' });

  /* ---------------- 9 Engagement ---------------- */
  T('e_msg', 9, 0, CUST, 'trigger', 'Customer comments, messages or reviews', 'Customers', 'On any channel.', { evidence: 'Simple SRS, section 7: Comment to sale' });
  T('e_box', 9, 1, PLAT, 'auto', 'One inbox collects it, AI reads it', 'Marketing OS', 'All comments, DMs, mentions and chats in one place.', { evidence: J('Stage 9'), automations: ['I7'] });
  T('e_kind', 9, 2, SUPP, 'decision', 'What kind of message?', 'Support agent', 'Decides how the message is handled.', { evidence: 'Simple SRS, section 7: Comment to sale' });
  T('e_key', 9, 3, PLAT, 'auto', 'Keyword: automatic private reply', 'Marketing OS', 'A keyword comment gets a private reply, with a product link.', { evidence: 'Simple SRS, section 7: Comment to sale', pains: ['G4'] });
  T('e_q', 9, 3, SUPP, 'approve', 'Question: staff approve AI reply', 'Support agent', 'AI drafts, with a manual option.', { evidence: 'Simple SRS, section 7: Comment to sale', touch: tch('approve', 's_tick', ['Reply']) });
  T('e_tick', 9, 4, SUPP, 'action', 'Complaint: open a support ticket', 'Support agent', 'AI answers first, then a support agent takes over.', { evidence: 'Simple SRS, section 7: Support ticket' });
  T('e_solved', 9, 5, SUPP, 'decision', 'Solved?', 'Support agent', 'Hard cases go up a level.', { evidence: 'Simple SRS, section 7: Support ticket' });
  T('e_esc', 9, 5, ACC, 'action', 'Senior agent, then the client', 'Senior agent', 'Hard cases and crises are handled here.', { evidence: 'Simple SRS, section 7: Support ticket' });
  T('e_csat', 9, 6, PLAT, 'auto', 'Close ticket, send CSAT survey', 'Marketing OS', 'The customer rates the help they got.', { evidence: 'Simple SRS, section 7: Support ticket' });
  T('e_rep', 9, 7, CHAN, 'action', 'Reviews, customer content, community', 'Channel team', 'Asks for reviews, reposts customer content, and builds groups and ambassadors.', { evidence: J('Stage 9') });
  T('e_sen', 9, 7, PLAT, 'auto', 'Track sentiment', 'Marketing OS', 'Shows how customers feel, overall and per product.', { evidence: J('Stage 9') });
  S('s_tick', 9, 4, 'Conversations and tickets', 'Every reply and problem, kept with the customer profile.', J('Stage 9'));
  F('f_box', 9, 1, 'One inbox', 'Holds all comments, DMs, mentions and chats.', ['e_box'], 'Simple SRS, section 3: Sell and support');
  F('f_tick', 9, 4, 'Support tickets', 'Tracks problems, with escalations.', ['e_tick', 'e_solved', 'e_esc'], 'Simple SRS, section 3: Sell and support');
  F('f_rev', 9, 7, 'Reviews, sentiment, community', 'Collects reviews and customer content, shows mood, and manages groups.', ['e_rep', 'e_sen'], 'Simple SRS, section 3');
  E('l_won', 'e_msg', { handoff: 'A customer' }); E('e_msg', 'e_box'); E('e_box', 'e_kind'); E('e_kind', 'e_key', { label: 'Keyword' }); E('e_kind', 'e_q', { label: 'Question' }); E('e_kind', 'e_tick', { label: 'Complaint' }); E('e_key', 'l_cap', loop('Interested')); E('e_tick', 'e_solved'); E('e_q', 'e_csat'); E('e_solved', 'e_esc', n()); E('e_solved', 'e_csat', y()); E('e_esc', 'e_csat'); E('e_csat', 'e_rep'); E('e_csat', 'e_sen');

  /* ---------------- 10 Retention ---------------- */
  T('k_wel', 10, 0, PLAT, 'auto', 'Welcome and activation flows', 'Marketing OS', 'New customers get started.', { evidence: J('Stage 10') });
  T('k_rep', 10, 1, PLAT, 'auto', 'Repeat purchase, cross-sell, up-sell, renewal', 'Marketing OS', 'These run as campaigns.', { evidence: J('Stage 10') });
  T('k_loy', 10, 2, PLAT, 'auto', 'Loyalty points and referrals', 'Marketing OS', 'Points, rewards and referral links.', { evidence: J('Stage 10') });
  T('k_nps', 10, 3, PLAT, 'auto', 'NPS survey', 'Marketing OS', 'Feedback goes back into research.', { evidence: J('Stage 10') });
  T('k_adv', 10, 3, SUPP, 'action', 'Collect testimonials, grow advocates', 'Support team', 'Turns happy customers into advocates.', { evidence: J('Stage 10') });
  T('k_stop', 10, 4, CUST, 'decision', 'Customer stopped buying?', 'Marketing OS', 'The platform marks them as at risk.', { evidence: 'Simple SRS, section 7: Win-back' });
  T('k_win', 10, 5, PLAT, 'auto', 'Win-back reminders and offers', 'Marketing OS', 'If they buy, they return to normal flows.', { evidence: 'Simple SRS, section 7: Win-back' });
  T('k_end', 10, 6, CUST, 'trigger', 'Customer buys again, or messages stop', 'Customers', 'The stage succeeds when the customer buys again.', { evidence: J('Stage 10') });
  F('f_life', 10, 0, 'Lifecycle flows', 'Runs welcome, repeat, cross-sell, up-sell and win-back flows.', ['k_wel', 'k_rep', 'k_win'], 'Simple SRS, section 3: Keep customers');
  F('f_loy', 10, 2, 'Loyalty and referrals', 'Handles points, rewards and referral links.', ['k_loy'], 'Simple SRS, section 3: Keep customers');
  F('f_sur', 10, 3, 'Surveys', 'Runs CSAT and NPS.', ['k_nps'], 'Simple SRS, section 3: Keep customers');
  E('e_rep', 'k_wel', { handoff: 'Customers' }); E('k_wel', 'k_rep'); E('k_rep', 'k_loy'); E('k_loy', 'k_nps'); E('k_nps', 'k_stop'); E('k_nps', 'k_adv'); E('k_stop', 'k_win', y()); E('k_win', 'k_end'); E('k_stop', 'k_rep', loop('No, keep going'));

  /* ---------------- 11 Measurement ---------------- */
  T('m_data', 11, 0, PLAT, 'auto', 'Collect data from every channel', 'Marketing OS', 'One set of numbers. Revenue means real revenue, after returns and cancelled orders.', { evidence: 'Simple SRS, section 5' });
  T('m_dash', 11, 1, PLAT, 'auto', 'Update dashboards, flag big changes', 'Marketing OS', 'Flags anything that jumped or dropped.', { evidence: 'Simple SRS, section 5: Daily analytics flow' });
  T('m_ai', 11, 2, PLAT, 'auto', 'AI explains the cause, suggests a fix', 'Marketing OS', 'Staff see the likely cause and a suggestion.', { evidence: 'Simple SRS, section 5: Daily analytics flow', automations: ['I9'] });
  T('m_fix', 11, 3, CHAN, 'approve', 'Staff approve, change or reject', 'Media buyer', 'The platform records what was done.', { evidence: 'Simple SRS, section 5: Daily analytics flow', touch: tch('approve', 's_rep', ['Suggestion', 'Action taken']) });
  T('m_att', 11, 3, STRAT, 'action', 'Find what drove sales, compare with rivals', 'Analyst', 'First-touch, last-touch and multi-touch, next to what each ad platform reports.', { evidence: 'Simple SRS, section 5: Finding what drove a sale' });
  T('m_rep', 11, 4, PLAT, 'auto', 'Draft the report and summary', 'Marketing OS', 'AI writes what happened, why, and what comes next.', { evidence: 'Simple SRS, section 5: Client report flow', automations: ['I10'] });
  T('m_chk', 11, 5, ACC, 'doc', 'Account manager checks and adds notes', 'Account manager', 'A person checks every client report.', { evidence: 'Simple SRS, section 5: Client report flow', touch: tch('record', 's_rep', ['Notes', 'Next steps']) });
  T('m_cli', 11, 6, CLIENT, 'external', 'Client gets the report, joins review call', 'Client', 'Sent as a PDF or link, with invoices as needed.', { evidence: 'Simple SRS, section 5: Client report flow' });
  T('m_task', 11, 7, ACC, 'action', 'Decisions become tasks', 'Project manager', 'Agreed actions go on the board.', { evidence: 'Simple SRS, section 5: Client report flow' });
  S('s_rep', 11, 4, 'Reports and decisions', 'Thirteen reports, from the daily check to the portfolio report.', 'Simple SRS, section 5: Reports');
  F('f_dash', 11, 1, 'Dashboards and reports', 'Sales, ads, campaign and client reports.', ['m_dash', 'm_rep'], 'Simple SRS, section 3: Measure and improve');
  F('f_attr', 11, 3, 'Attribution, commerce, product analysis', 'Shows which channel drove each sale, real revenue, and which products and prices work.', ['m_att'], 'Simple SRS, section 3: Measure and improve');
  F('f_port', 11, 5, 'Portfolio dashboard, finance', 'Shows every client\'s health, invoices, payments and profit per client.', ['m_chk'], 'Simple SRS, section 3: Run the agency');
  F('f_task', 11, 7, 'Tasks, projects, team', 'Kanban boards, milestones, calendars, workload and performance.', ['m_task'], 'Simple SRS, section 3: Run the agency');
  E('k_end', 'm_data', { handoff: 'Results' }); E('m_data', 'm_dash'); E('m_dash', 'm_ai'); E('m_ai', 'm_fix'); E('m_dash', 'm_att'); E('m_fix', 'm_rep'); E('m_att', 'm_rep'); E('m_rep', 'm_chk'); E('m_chk', 'm_cli', { handoff: 'Report' }); E('m_cli', 'm_task');

  /* ---------------- 12 Optimization ---------------- */
  T('z_cmd', 12, 0, PLAT, 'auto', 'Command Center suggests a plan', 'Marketing OS', 'Reads brand, goals, money, results, products, customers, market, past work and team, then finds the biggest gap.', { evidence: 'Simple SRS, section 6: How the agent suggests a plan', automations: ['I12'], reads: ['s_bk', 's_strat', 's_crm', 's_rep', 's_learn'] });
  T('z_ok', 12, 1, STRAT, 'approve', 'Staff edit, approve or reject the plan', 'Strategist', 'Staff must confirm anything that sends, spends, publishes, deletes or bills.', { evidence: 'Simple SRS, section 6: Rules for the agent', touch: tch('approve', 's_learn', ['Plan']) });
  T('z_test', 12, 2, CHAN, 'action', 'Run A/B and multivariate tests', 'Media buyer', 'Creatives, copy, audiences, landing pages and subject lines.', { evidence: J('Stage 12') });
  T('z_sug', 12, 3, PLAT, 'auto', 'Suggest budget moves', 'Marketing OS', 'Moves money toward winners. The media buyer approves.', { evidence: 'Simple SRS, section 7: Ad launch and scaling', automations: ['I11'] });
  T('z_scale', 12, 4, CHAN, 'approve', 'Scale winners slowly, stop losers', 'Media buyer', 'Winners get more budget, in steps.', { evidence: 'Simple SRS, section 7: Ad launch and scaling', touch: tch('approve', 's_learn', ['Budget move']) });
  T('z_fresh', 12, 4, CREA, 'action', 'Refresh tired creatives', 'Creative team', 'Replaces ads that have worn out.', { evidence: J('Stage 12') });
  T('z_ref', 12, 5, CHAN, 'action', 'Refine audiences and keywords', 'Channel team', 'Uses what the tests showed.', { evidence: J('Stage 12') });
  T('z_save', 12, 6, STRAT, 'doc', 'Save the learning', 'Strategist', 'Goes into the What worked library.', { evidence: J('Stage 12'), touch: tch('record', 's_learn', ['What worked', 'What failed']) });
  T('z_ren', 12, 7, ACC, 'decision', 'Client continues?', 'Director', 'Renewal comes up, or the client leaves.', { evidence: 'Simple SRS, section 1: Workspaces' });
  T('z_off', 12, 8, ACC, 'trigger', 'Client leaves: access ended, data exported, archived', 'Operator', 'Only owners and operators can open an archive.', { evidence: 'Simple SRS, section 1: Workspaces' });
  S('s_learn', 12, 6, 'What worked library', 'Learnings saved for the next round.', J('Stage 12'));
  F('f_cmd', 12, 0, 'Command Center', 'AI assistant that runs the platform by prompt, on the website and on WhatsApp.', ['z_cmd'], 'Simple SRS, section 6');
  F('f_test', 12, 2, 'Testing', 'Runs A/B tests on ads, pages and messages.', ['z_test'], 'Simple SRS, section 3: Measure and improve');
  F('f_grow', 12, 4, 'Growth tracker', 'Business diagnostic, goal gap, and value delivered.', ['z_scale'], 'Simple SRS, section 3: Measure and improve');
  F('f_work', 12, 6, 'What worked library', 'Saves learnings for next time.', ['z_save'], 'Simple SRS, section 3: Measure and improve');
  E('m_task', 'z_cmd', { handoff: 'Reports, tasks' }); E('z_cmd', 'z_ok'); E('z_ok', 'z_test'); E('z_test', 'z_sug'); E('z_sug', 'z_scale'); E('z_sug', 'z_fresh'); E('z_scale', 'z_ref'); E('z_fresh', 'z_ref'); E('z_ref', 'z_save'); E('z_save', 'z_ren'); E('z_ren', 'z_off', n()); E('z_ren', 'r_mkt', loop('Yes, next cycle'));

  /* tools point back to the steps they help */
  nodes.forEach(function (f) { if (f.type === 'feature') f.users.forEach(function (u) {
    var m = nodes.filter(function (x) { return x.id === u; })[0];
    if (m) { m.features = m.features || []; m.features.push(f.id); }
  }); });

  var glossary = [
    ['A/B test', 'A/B test', 'Trying two versions to see which works better.', true], ['AEO', 'Answer engine optimisation', 'Getting a brand into answers from search and assistants.'],
    ['AOV', 'Average order value', 'Average money spent per order.'], ['CAC', 'Customer acquisition cost', 'Cost to win one customer.'],
    ['COD', 'Cash on delivery', 'The customer pays when the parcel arrives.'], ['CRM', 'Customer relationship manager', 'The customer database, with one profile per customer.'],
    ['CSAT', 'Customer satisfaction', 'A survey asking if a customer was happy with the help they got.'], ['CTA', 'Call to action', 'A button or link asking someone to act, such as Buy Now.'],
    ['DM', 'Direct message', 'A private message on social media.'], ['GEO', 'Generative engine optimisation', 'Getting a brand mentioned by AI tools.'],
    ['GTM', 'Google Tag Manager', 'Adds tracking to a site.'], ['ICP', 'Ideal Customer Profile', 'A description of the best buyers.'],
    ['KPI', 'Key performance indicator', 'A number used to measure success.'], ['NPS', 'Net Promoter Score', 'A survey asking if a customer would recommend the brand.'],
    ['RCS', 'Rich Communication Services', 'Richer text messages, with images and buttons.'], ['ROAS', 'Return on ad spend', 'Sales earned for each rupee spent on ads.'],
    ['SEO', 'Search engine optimisation', 'Getting a site to rank higher in search.'], ['SMART', 'SMART goals', 'Goals that are specific, measurable, achievable, relevant and time-bound.'],
    ['SWOT', 'SWOT', 'A list of a brand\'s Strengths, Weaknesses, Opportunities and Threats.'], ['UGC', 'User-generated content', 'Content made by customers.'],
    ['UTM', 'UTM link rules', 'Tags on links that show where a visit came from.']
  ];

  window.PROCESS = { meta: meta, glossary: glossary, stages: stages, lanes: lanes, pains: pains, automations: automations, nodes: nodes, edges: edges };
})();
