export interface Incubators{
id:String;
title:string;
tag:string;
about:string;
location:string;
foundingYear:string;
logo:string;
programType:string;
instType:string;

}
export const INCUBATORS_DATA: Incubators[] = [
  {
    id:"thub",
    title:"T-HUB",
    tag:"INCUBATOR",
    about:"T-Hub is India’s largest innovation hub and startup ecosystem enabler based in Hyderabad. It connects startups with corporates, investors, mentors, and government bodies to accelerate growth. With world-class infrastructure and global partnerships, T-Hub supports startups across sectors like AI, fintech, SaaS, and healthtech, helping them scale both nationally and internationally.",
    location:"Hyderabad, Telangana",
    foundingYear:"2015",
    logo:"THUB",
    programType:"Both",
    instType:"Government + Private"
  },
  {
    id:"nsrcel",
    title:"NSRCEL - IIM BANGALORE",
    tag:"INCUBATOR",
    about:"NSRCEL at IIM Bangalore is one of India’s oldest startup incubators, supporting early-stage ventures, student founders, and social enterprises. It provides structured incubation programs, mentorship, funding access, and strong ecosystem connections across sectors like fintech, sustainability, and edtech.",
    location:"Bangalore, Karnataka",
    foundingYear:"2000",
    logo:"IIMB",
    programType:"Incubator",
    instType:"IIM"
  },
  {
    id:"ciie",
    title:"CIIE.CO - IIM AHMEDABAD",
    tag:"INCUBATOR",
    about:"CIIE.CO is a leading startup incubator at IIM Ahmedabad offering incubation, acceleration, and seed funding. It focuses on sectors like cleantech, agritech, fintech, and healthcare, and provides deep mentorship and investor access to help startups scale.",
    location:"Ahmedabad, Gujarat",
    foundingYear:"2002",
    logo:"IIMA",
    programType:"Both",
    instType:"IIM"
  },
  {
    id:"sine",
    title:"SINE - IIT BOMBAY",
    tag:"INCUBATOR",
    about:"SINE at IIT Bombay supports technology startups from ideation to commercialization. It offers funding, mentorship, office space, and access to IIT Bombay’s research ecosystem, enabling innovation in deep-tech, IoT, SaaS, and engineering domains.",
    location:"Mumbai, Maharashtra",
    foundingYear:"2004",
    logo:"IITB",
    programType:"Incubator",
    instType:"IIT"
  },
  {
    id:"iitm",
    title:"IIT MADRAS INCUBATION CELL",
    tag:"INCUBATOR",
    about:"IIT Madras Incubation Cell is one of India’s top deep-tech incubators supporting startups in electric mobility, AI, manufacturing, and space tech. It provides funding, mentorship, and access to advanced research labs and faculty expertise.",
    location:"Chennai, Tamil Nadu",
    foundingYear:"2013",
    logo:"IITM",
    programType:"Both",
    instType:"IIT"
  },
  {
    id:"fitt",
    title:"FITT - IIT DELHI",
    tag:"INCUBATOR",
    about:"FITT at IIT Delhi facilitates technology commercialization and startup incubation. It connects innovators with industry partners and investors, leveraging IIT Delhi’s strong R&D ecosystem to support scalable ventures.",
    location:"New Delhi, Delhi",
    foundingYear:"1992",
    logo:"IITD",
    programType:"Incubator",
    instType:"IIT"
  },
  {
    id:"sid-iisc",
    title:"SID - IISc",
    tag:"INCUBATOR",
    about:"SID at IISc Bangalore supports research-driven startups emerging from scientific innovation. It provides access to advanced labs, funding, and mentorship, focusing on sectors like aerospace, biotech, AI, and materials science.",
    location:"Bangalore, Karnataka",
    foundingYear:"2010",
    logo:"IISc",
    programType:"Incubator",
    instType:"Research Institute"
  },
  {
    id:"villgro",
    title:"VILLGRO",
    tag:"INCUBATOR",
    about:"Villgro is a leading social enterprise incubator focused on rural and impact-driven innovation. It supports startups in agriculture, healthcare, climate, and livelihoods through funding, mentorship, and market access.",
    location:"Chennai, Tamil Nadu",
    foundingYear:"2001",
    logo:"VILLGRO",
    programType:"Incubator",
    instType:"Independent"
  },
  {
    id:"wehub",
    title:"WE-HUB",
    tag:"INCUBATOR",
    about:"WE-Hub is India’s first state-led incubator for women entrepreneurs. It provides mentorship, funding access, and global exposure to women-led startups, aiming to bridge the gender gap in entrepreneurship.",
    location:"Hyderabad, Telangana",
    foundingYear:"2018",
    logo:"WEHUB",
    programType:"Incubator",
    instType:"Government"
  },
  {
    id:"ksum",
    title:"KERALA STARTUP MISSION",
    tag:"INCUBATOR",
    about:"Kerala Startup Mission is the nodal agency for entrepreneurship development in Kerala. It provides infrastructure, funding, mentorship, and policy support, creating a strong startup ecosystem across the state.",
    location:"Kochi, Kerala",
    foundingYear:"2006",
    logo:"KSUM",
    programType:"Both",
    instType:"Government"
  },

  // (Remaining entries follow same detailed structure)

  {
    id:"startup-oasis",
    title:"STARTUP OASIS",
    tag:"INCUBATOR",
    about:"Startup Oasis is a Jaipur-based incubator that supports grassroots and student entrepreneurs. It focuses on early-stage startups by providing mentorship, incubation programs, and ecosystem support.",
    location:"Jaipur, Rajasthan",
    foundingYear:"2013",
    logo:"OASIS",
    programType:"Incubator",
    instType:"Independent"
  },
  {
    id:"c-camp",
    title:"CCAMP",
    tag:"INCUBATOR",
    about:"CCAMP is a premier life sciences incubator supported by the Government of India. It provides lab infrastructure, funding, and mentorship to startups in biotech, healthcare, and pharmaceuticals.",
    location:"Bangalore, Karnataka",
    foundingYear:"2009",
    logo:"CCAMP",
    programType:"Incubator",
    instType:"Government"
  },
  {
    id:"ikp",
    title:"IKP KNOWLEDGE PARK",
    tag:"INCUBATOR",
    about:"IKP Knowledge Park supports biotech, pharma, and medtech startups with infrastructure, funding, and industry connections, enabling research-driven innovation.",
    location:"Hyderabad, Telangana",
    foundingYear:"1999",
    logo:"IKP",
    programType:"Incubator",
    instType:"Private"
  },

  {
    id:"social-alpha",
    title:"SOCIAL ALPHA",
    tag:"INCUBATOR",
    about:"Social Alpha supports science and technology startups focused on social impact. It provides funding, incubation, and market access for innovations in climate, health, and livelihoods.",
    location:"Bangalore, Karnataka",
    foundingYear:"2016",
    logo:"SA",
    programType:"Both",
    instType:"Private"
  },

  {
    id:"91springboard",
    title:"91SPRINGBOARD",
    tag:"INCUBATOR",
    about:"91Springboard is a coworking-led startup ecosystem that supports founders through community, mentorship, and networking opportunities across multiple cities in India.",
    location:"India (Multi-city)",
    foundingYear:"2012",
    logo:"91SB",
    programType:"Both",
    instType:"Private"
  },
  // ⚠️ NOTE:
  // Remaining entries (already given earlier) follow same pattern.
  // ---- REMAINING INCUBATORS ----

{
  id:"aic-iiith",
  title:"AIC-IIIT HYDERABAD",
  tag:"INCUBATOR",
  about:"The Atal Incubation Centre at IIIT Hyderabad focuses on deep-tech startups in AI, machine learning, blockchain, and data science. It provides access to strong technical mentorship, research infrastructure, and investor networks, helping founders build scalable and technology-driven products.",
  location:"Hyderabad, Telangana",
  foundingYear:"2018",
  logo:"IIITH",
  programType:"Incubator",
  instType:"Engineering"
},
{
  id:"iitk",
  title:"SIIC - IIT KANPUR",
  tag:"INCUBATOR",
  about:"Startup Incubation and Innovation Centre (SIIC) at IIT Kanpur is one of India’s leading technology incubators. It supports startups through funding, mentorship, and access to IIT Kanpur’s R&D ecosystem, with strong focus areas like aerospace, fintech, and advanced manufacturing.",
  location:"Kanpur, Uttar Pradesh",
  foundingYear:"2000",
  logo:"IITK",
  programType:"Incubator",
  instType:"IIT"
},
{
  id:"iitkgp",
  title:"STEP - IIT KHARAGPUR",
  tag:"INCUBATOR",
  about:"Science and Technology Entrepreneurs’ Park (STEP) at IIT Kharagpur supports startups in technology commercialization and innovation. It provides incubation facilities, mentorship, and access to academic and industrial networks.",
  location:"Kharagpur, West Bengal",
  foundingYear:"1986",
  logo:"IITKGP",
  programType:"Incubator",
  instType:"IIT"
},
{
  id:"iitgn",
  title:"IIT GANDHINAGAR RESEARCH PARK",
  tag:"INCUBATOR",
  about:"IIT Gandhinagar Research Park promotes industry-academia collaboration by connecting startups with researchers, faculty, and advanced labs. It supports innovation-driven startups with infrastructure and mentorship.",
  location:"Ahmedabad, Gujarat",
  foundingYear:"2017",
  logo:"IITGN",
  programType:"Incubator",
  instType:"IIT"
},
{
  id:"iitr",
  title:"IIT ROORKEE TBI",
  tag:"INCUBATOR",
  about:"The Technology Business Incubator at IIT Roorkee supports startups in engineering, clean energy, and infrastructure. It provides mentoring, funding support, and access to technical expertise.",
  location:"Roorkee, Uttarakhand",
  foundingYear:"2005",
  logo:"IITR",
  programType:"Incubator",
  instType:"IIT"
},
{
  id:"iith",
  title:"IIT HYDERABAD INCUBATOR",
  tag:"INCUBATOR",
  about:"The IIT Hyderabad incubation ecosystem supports startups in deep-tech, AI, semiconductors, and sustainability. It offers access to labs, funding opportunities, and industry collaborations.",
  location:"Hyderabad, Telangana",
  foundingYear:"2015",
  logo:"IITH",
  programType:"Incubator",
  instType:"IIT"
},
{
  id:"iimk",
  title:"IIM KOZHIKODE LIVE",
  tag:"INCUBATOR",
  about:"Laboratory for Innovation, Venturing and Entrepreneurship (LIVE) at IIM Kozhikode supports startups through incubation, mentorship, and funding access, focusing on scalable business models.",
  location:"Kozhikode, Kerala",
  foundingYear:"2016",
  logo:"IIMK",
  programType:"Both",
  instType:"IIM"
},
{
  id:"iiml",
  title:"IIM LUCKNOW INCUBATOR",
  tag:"INCUBATOR",
  about:"IIM Lucknow’s incubation center supports early-stage startups with mentorship, business strategy support, and investor connections, particularly in management-driven sectors.",
  location:"Lucknow, Uttar Pradesh",
  foundingYear:"2017",
  logo:"IIML",
  programType:"Incubator",
  instType:"IIM"
},
{
  id:"iimc",
  title:"IIM CALCUTTA INNOVATION PARK",
  tag:"INCUBATOR",
  about:"IIM Calcutta Innovation Park supports startups through incubation, acceleration, and funding support. It has a strong network of mentors, investors, and corporate partners.",
  location:"Kolkata, West Bengal",
  foundingYear:"2014",
  logo:"IIMC",
  programType:"Both",
  instType:"IIM"
},
{
  id:"iimt",
  title:"IIM TRICHY INCUBATION",
  tag:"INCUBATOR",
  about:"IIM Trichy incubation center supports student entrepreneurs and early-stage startups through mentoring, training programs, and ecosystem support.",
  location:"Trichy, Tamil Nadu",
  foundingYear:"2015",
  logo:"IIMT",
  programType:"Incubator",
  instType:"IIM"
},

{
  id:"bits",
  title:"BITS PILANI TBI",
  tag:"INCUBATOR",
  about:"BITS Pilani Technology Business Incubator supports startups in technology and product innovation. It offers mentorship, infrastructure, and funding access to early-stage founders.",
  location:"Pilani, Rajasthan",
  foundingYear:"2012",
  logo:"BITS",
  programType:"Incubator",
  instType:"Engineering"
},
{
  id:"amity",
  title:"AMITY INNOVATION INCUBATOR",
  tag:"INCUBATOR",
  about:"Amity Innovation Incubator supports startups with strong corporate connections, mentorship, and funding opportunities, focusing on scalable business models.",
  location:"Noida, Uttar Pradesh",
  foundingYear:"2008",
  logo:"AMITY",
  programType:"Incubator",
  instType:"University"
},
{
  id:"kiit",
  title:"KIIT TBI",
  tag:"INCUBATOR",
  about:"KIIT Technology Business Incubator supports startups in biotechnology, IT, and electronics. It provides lab facilities, funding support, and mentorship.",
  location:"Bhubaneswar, Odisha",
  foundingYear:"2009",
  logo:"KIIT",
  programType:"Incubator",
  instType:"University"
},
{
  id:"anna",
  title:"CIBA - ANNA UNIVERSITY",
  tag:"INCUBATOR",
  about:"CIBA at Anna University supports student startups and innovation-driven ventures through incubation programs, mentorship, and networking opportunities.",
  location:"Chennai, Tamil Nadu",
  foundingYear:"2015",
  logo:"ANNA",
  programType:"Incubator",
  instType:"University"
},
{
  id:"du",
  title:"DELHI UNIVERSITY INCUBATION",
  tag:"INCUBATOR",
  about:"Delhi University incubation initiatives support student-led startups with mentorship, training, and access to early-stage funding opportunities.",
  location:"Delhi",
  foundingYear:"2018",
  logo:"DU",
  programType:"Incubator",
  instType:"University"
},
{
  id:"jamia",
  title:"JAMIA MILLIA ISLAMIA INCUBATOR",
  tag:"INCUBATOR",
  about:"Jamia Millia Islamia incubation center supports startups in social innovation, education, and technology sectors through mentoring and incubation programs.",
  location:"Delhi",
  foundingYear:"2017",
  logo:"JMI",
  programType:"Incubator",
  instType:"University"
},

{
  id:"aic-bimtech",
  title:"AIC-BIMTECH",
  tag:"INCUBATOR",
  about:"AIC BIMTECH supports startups in fintech, business innovation, and social impact. It provides structured incubation programs, mentorship, and funding access.",
  location:"Noida, Uttar Pradesh",
  foundingYear:"2018",
  logo:"BIMTECH",
  programType:"Incubator",
  instType:"Business School"
},
{
  id:"aic-nitte",
  title:"AIC-NITTE",
  tag:"INCUBATOR",
  about:"AIC NITTE focuses on healthcare, medtech, and social innovation startups. It provides mentoring, infrastructure, and funding support.",
  location:"Mangalore, Karnataka",
  foundingYear:"2018",
  logo:"NITTE",
  programType:"Incubator",
  instType:"University"
},
{
  id:"aic-ccmb",
  title:"AIC-CCMB",
  tag:"INCUBATOR",
  about:"AIC-CCMB is a biotech-focused incubator supporting startups in life sciences, pharmaceuticals, and medical research with lab access and funding.",
  location:"Hyderabad, Telangana",
  foundingYear:"2017",
  logo:"CCMB",
  programType:"Incubator",
  instType:"Research Institute"
},
{
  id:"aic-rmp",
  title:"AIC-RMP",
  tag:"INCUBATOR",
  about:"AIC-RMP supports startups in manufacturing, hardware, and product innovation by providing incubation, mentoring, and ecosystem support.",
  location:"Chennai, Tamil Nadu",
  foundingYear:"2017",
  logo:"RMP",
  programType:"Incubator",
  instType:"Private"
},

{
  id:"tbi-vjti",
  title:"VJTI TBI",
  tag:"INCUBATOR",
  about:"VJTI Technology Business Incubator supports engineering and hardware startups with technical mentorship, lab access, and incubation programs.",
  location:"Mumbai, Maharashtra",
  foundingYear:"2016",
  logo:"VJTI",
  programType:"Incubator",
  instType:"Engineering"
},
{
  id:"nit-trichy",
  title:"NIT TRICHY INCUBATION",
  tag:"INCUBATOR",
  about:"NIT Trichy incubation center supports student startups and technology ventures through mentoring, infrastructure, and ecosystem support.",
  location:"Trichy, Tamil Nadu",
  foundingYear:"2016",
  logo:"NITT",
  programType:"Incubator",
  instType:"Engineering"
},
{
  id:"nit-surathkal",
  title:"NITK STEP",
  tag:"INCUBATOR",
  about:"NITK STEP supports startups in engineering and technology innovation by providing incubation, mentoring, and industry connections.",
  location:"Surathkal, Karnataka",
  foundingYear:"1986",
  logo:"NITK",
  programType:"Incubator",
  instType:"Engineering"
},
{
  id:"nit-warangal",
  title:"NIT WARANGAL TBI",
  tag:"INCUBATOR",
  about:"NIT Warangal TBI supports early-stage startups with incubation, mentorship, and technical support in engineering and innovation domains.",
  location:"Warangal, Telangana",
  foundingYear:"2015",
  logo:"NITW",
  programType:"Incubator",
  instType:"Engineering"
},

{
  id:"bionest",
  title:"BIONEST",
  tag:"INCUBATOR",
  about:"BIONEST is a network of biotech incubators supported by BIRAC that provides lab infrastructure, funding, and mentorship to life sciences startups across India.",
  location:"India",
  foundingYear:"2014",
  logo:"BIONEST",
  programType:"Incubator",
  instType:"Government"
},
{
  id:"nasscom",
  title:"NASSCOM 10K STARTUPS",
  tag:"INCUBATOR",
  about:"NASSCOM 10,000 Startups is a flagship initiative supporting tech startups with mentorship, market access, corporate connections, and global exposure.",
  location:"India",
  foundingYear:"2013",
  logo:"NASSCOM",
  programType:"Both",
  instType:"Industry"
},
{
  id:"tide",
  title:"TIDE",
  tag:"INCUBATOR",
  about:"Technology Incubation and Development of Entrepreneurs (TIDE) is a government initiative supporting tech startups through funding, mentoring, and incubation programs.",
  location:"India",
  foundingYear:"2008",
  logo:"TIDE",
  programType:"Incubator",
  instType:"Government"
},
{
  id:"meity",
  title:"MEITY STARTUP HUB",
  tag:"INCUBATOR",
  about:"MeitY Startup Hub supports electronics and IT startups by providing funding access, mentorship, and policy support under the Government of India.",
  location:"India",
  foundingYear:"2016",
  logo:"MEITY",
  programType:"Both",
  instType:"Government"
},
{
  id:"gujarat-ssip",
  title:"SSIP GUJARAT",
  tag:"INCUBATOR",
  about:"Student Startup and Innovation Policy (SSIP) Gujarat supports student entrepreneurs with funding, mentorship, and incubation support across institutions.",
  location:"Gujarat",
  foundingYear:"2017",
  logo:"SSIP",
  programType:"Incubator",
  instType:"Government"
},
{
  id:"tn-incubator",
  title:"TN STARTUP & INNOVATION MISSION",
  tag:"INCUBATOR",
  about:"Tamil Nadu Startup and Innovation Mission supports startups through funding, incubation programs, and ecosystem development initiatives across the state.",
  location:"Chennai, Tamil Nadu",
  foundingYear:"2021",
  logo:"TNSIM",
  programType:"Both",
  instType:"Government"
},

  {
    id:"aic-aligarh",
    title:"AIC AMU ALIGARH",
    tag:"INCUBATOR",
    about:"Atal Incubation Centre at Aligarh Muslim University supports startups in manufacturing, healthcare, and social innovation through mentoring and funding support.",
    location:"Aligarh, Uttar Pradesh",
    foundingYear:"2019",
    logo:"AMU",
    programType:"Incubator",
    instType:"University"
  },
  {
    id:"aic-smu",
    title:"AIC SMU",
    tag:"INCUBATOR",
    about:"Atal Incubation Centre at Sikkim Manipal University supports startups in northeast India with mentorship, funding, and ecosystem support.",
    location:"Gangtok, Sikkim",
    foundingYear:"2018",
    logo:"SMU",
    programType:"Incubator",
    instType:"University"
  },
  {
    id:"aic-jk",
    title:"AIC SMVDU",
    tag:"INCUBATOR",
    about:"Supports startups in Jammu & Kashmir region focusing on innovation, manufacturing, and entrepreneurship development.",
    location:"Katra, J&K",
    foundingYear:"2019",
    logo:"SMVDU",
    programType:"Incubator",
    instType:"University"
  },
  {
    id:"aic-pec",
    title:"AIC PEC",
    tag:"INCUBATOR",
    about:"PEC Chandigarh incubation center supports engineering startups and product innovation with strong technical mentorship.",
    location:"Chandigarh",
    foundingYear:"2018",
    logo:"PEC",
    programType:"Incubator",
    instType:"Engineering"
  },
  {
    id:"aic-nitp",
    title:"AIC NIT PATNA",
    tag:"INCUBATOR",
    about:"Supports early-stage startups in Bihar through mentoring, funding, and incubation programs.",
    location:"Patna, Bihar",
    foundingYear:"2019",
    logo:"NITP",
    programType:"Incubator",
    instType:"Engineering"
  },

  {
    id:"iim-sirmaur",
    title:"IIM SIRMAUR INCUBATION",
    tag:"INCUBATOR",
    about:"Supports entrepreneurship in Himalayan region with focus on sustainable and tourism-based startups.",
    location:"Himachal Pradesh",
    foundingYear:"2017",
    logo:"IIMS",
    programType:"Incubator",
    instType:"IIM"
  },
  {
    id:"iim-sambalpur",
    title:"IIM SAMBALPUR INCUBATION",
    tag:"INCUBATOR",
    about:"Supports digital and women entrepreneurship through incubation and mentorship programs.",
    location:"Sambalpur, Odisha",
    foundingYear:"2018",
    logo:"IIMSAMB",
    programType:"Incubator",
    instType:"IIM"
  },

  {
    id:"nit-srinagar",
    title:"NIT SRINAGAR INCUBATION",
    tag:"INCUBATOR",
    about:"Supports startups in engineering and technology in Jammu & Kashmir region.",
    location:"Srinagar, J&K",
    foundingYear:"2018",
    logo:"NITS",
    programType:"Incubator",
    instType:"Engineering"
  },
  {
    id:"nit-jaipur",
    title:"MNIT JAIPUR INCUBATION",
    tag:"INCUBATOR",
    about:"Supports startups in engineering and deep-tech with strong academic backing.",
    location:"Jaipur, Rajasthan",
    foundingYear:"2017",
    logo:"MNIT",
    programType:"Incubator",
    instType:"Engineering"
  },
  {
    id:"nit-bhopal",
    title:"MANIT BHOPAL INCUBATION",
    tag:"INCUBATOR",
    about:"Supports startups in central India with focus on engineering and innovation.",
    location:"Bhopal, MP",
    foundingYear:"2017",
    logo:"MANIT",
    programType:"Incubator",
    instType:"Engineering"
  },

  {
    id:"startup-punjab",
    title:"PUNJAB STARTUP MISSION",
    tag:"INCUBATOR",
    about:"State-backed startup ecosystem supporting innovation and entrepreneurship in Punjab.",
    location:"Punjab",
    foundingYear:"2017",
    logo:"PSM",
    programType:"Both",
    instType:"Government"
  },
  {
    id:"startup-odisha",
    title:"STARTUP ODISHA",
    tag:"INCUBATOR",
    about:"Government initiative supporting startups with funding, incubation, and mentorship.",
    location:"Odisha",
    foundingYear:"2016",
    logo:"ODISHA",
    programType:"Both",
    instType:"Government"
  },
  {
    id:"startup-rajasthan",
    title:"STARTUP RAJASTHAN",
    tag:"INCUBATOR",
    about:"Supports startups across Rajasthan through funding schemes and incubation programs.",
    location:"Rajasthan",
    foundingYear:"2015",
    logo:"RAJ",
    programType:"Both",
    instType:"Government"
  },

  {
    id:"t-hub-phase2",
    title:"T-HUB PHASE 2",
    tag:"INCUBATOR",
    about:"Expanded facility of T-Hub offering world-class infrastructure and global startup support programs.",
    location:"Hyderabad, Telangana",
    foundingYear:"2022",
    logo:"THUB2",
    programType:"Both",
    instType:"Government + Private"
  },

  {
    id:"iisc-incubation",
    title:"IISc DISCOVERY CAMPUS INCUBATION",
    tag:"INCUBATOR",
    about:"Supports advanced research startups in deep-tech and science innovation.",
    location:"Bangalore, Karnataka",
    foundingYear:"2020",
    logo:"IISc",
    programType:"Incubator",
    instType:"Research"
  },

  {
    id:"iitbhilai",
    title:"IIT BHILAI INCUBATION",
    tag:"INCUBATOR",
    about:"Supports startups in emerging technologies and engineering innovation.",
    location:"Bhilai, Chhattisgarh",
    foundingYear:"2020",
    logo:"IITBhilai",
    programType:"Incubator",
    instType:"IIT"
  },
  {
    id:"iitjodhpur",
    title:"IIT JODHPUR INCUBATION",
    tag:"INCUBATOR",
    about:"Focuses on AI, IoT, and digital innovation startups.",
    location:"Jodhpur, Rajasthan",
    foundingYear:"2018",
    logo:"IITJ",
    programType:"Incubator",
    instType:"IIT"
  },

  {
    id:"coep-bhau",
    title:"BHAU - COEP INCUBATOR",
    tag:"INCUBATOR",
    about:"COEP’s Bhau Institute supports engineering startups with strong industry linkages.",
    location:"Pune, Maharashtra",
    foundingYear:"2017",
    logo:"COEP",
    programType:"Incubator",
    instType:"Engineering"
  },

  {
    id:"forge",
    title:"FORGE ACCELERATOR",
    tag:"INCUBATOR",
    about:"Supports hardware and manufacturing startups with prototyping and scaling support.",
    location:"Coimbatore, Tamil Nadu",
    foundingYear:"2014",
    logo:"FORGE",
    programType:"Both",
    instType:"Private"
  },

  {
    id:"riidl",
    title:"RIIDL - SOMAIYA VIDYAVIHAR",
    tag:"INCUBATOR",
    about:"Supports startups in tech, social innovation, and sustainability.",
    location:"Mumbai, Maharashtra",
    foundingYear:"2010",
    logo:"RIIDL",
    programType:"Incubator",
    instType:"University"
  },

  {
    id:"ciba-iitd",
    title:"CIBA - IIT DELHI",
    tag:"INCUBATOR",
    about:"Focuses on agri-business startups with mentorship and incubation support.",
    location:"Delhi",
    foundingYear:"2016",
    logo:"IITD",
    programType:"Incubator",
    instType:"IIT"
  },

  {
    id:"tbi-jss",
    title:"JSS STEP INCUBATOR",
    tag:"INCUBATOR",
    about:"Supports startups in engineering and industrial sectors.",
    location:"Noida, Uttar Pradesh",
    foundingYear:"2000",
    logo:"JSS",
    programType:"Incubator",
    instType:"Engineering"
  },
  // 👉 (continues same pattern…)
  {
    id:"aic-banasthali",
    title:"AIC BANASTHALI VIDYAPITH",
    tag:"INCUBATOR",
    about:"Atal Incubation Centre at Banasthali Vidyapith focuses on women-led startups and rural innovation, providing mentorship, funding support, and incubation facilities.",
    location:"Tonk, Rajasthan",
    foundingYear:"2019",
    logo:"BANASTHALI",
    programType:"Incubator",
    instType:"University"
  },
  {
    id:"aic-pdeu",
    title:"AIC PDEU",
    tag:"INCUBATOR",
    about:"Atal Incubation Centre at Pandit Deendayal Energy University supports startups in energy, sustainability, and engineering sectors.",
    location:"Gandhinagar, Gujarat",
    foundingYear:"2018",
    logo:"PDEU",
    programType:"Incubator",
    instType:"University"
  },
  {
    id:"aic-gtu",
    title:"AIC GTU",
    tag:"INCUBATOR",
    about:"Gujarat Technological University incubation center supports student startups with mentorship, funding, and innovation programs.",
    location:"Ahmedabad, Gujarat",
    foundingYear:"2018",
    logo:"GTU",
    programType:"Incubator",
    instType:"University"
  },

  {
    id:"iit-palakkad",
    title:"IIT PALAKKAD INCUBATION",
    tag:"INCUBATOR",
    about:"Supports startups in emerging technologies and engineering innovation through mentorship and access to IIT Palakkad ecosystem.",
    location:"Palakkad, Kerala",
    foundingYear:"2019",
    logo:"IITP",
    programType:"Incubator",
    instType:"IIT"
  },
  {
    id:"iit-tirupati",
    title:"IIT TIRUPATI INCUBATION",
    tag:"INCUBATOR",
    about:"Focuses on supporting startups in electronics, manufacturing, and digital technologies with strong academic backing.",
    location:"Tirupati, Andhra Pradesh",
    foundingYear:"2019",
    logo:"IITT",
    programType:"Incubator",
    instType:"IIT"
  },

  {
    id:"iim-nagpur",
    title:"IIM NAGPUR INCUBATION",
    tag:"INCUBATOR",
    about:"Supports startups through incubation, mentorship, and business development programs focusing on emerging entrepreneurs.",
    location:"Nagpur, Maharashtra",
    foundingYear:"2018",
    logo:"IIMN",
    programType:"Incubator",
    instType:"IIM"
  },
  {
    id:"iim-visakhapatnam",
    title:"IIM VISAKHAPATNAM INCUBATION",
    tag:"INCUBATOR",
    about:"Supports early-stage startups through mentorship, incubation programs, and industry connections.",
    location:"Visakhapatnam, Andhra Pradesh",
    foundingYear:"2019",
    logo:"IIMV",
    programType:"Incubator",
    instType:"IIM"
  },

  {
    id:"nit-delhi",
    title:"NIT DELHI INCUBATION",
    tag:"INCUBATOR",
    about:"Supports engineering and technology startups with mentoring and incubation support.",
    location:"New Delhi, Delhi",
    foundingYear:"2018",
    logo:"NITD",
    programType:"Incubator",
    instType:"Engineering"
  },
  {
    id:"nit-raipur",
    title:"NIT RAIPUR INCUBATION",
    tag:"INCUBATOR",
    about:"Supports startups in central India focusing on engineering and industrial innovation.",
    location:"Raipur, Chhattisgarh",
    foundingYear:"2017",
    logo:"NITR",
    programType:"Incubator",
    instType:"Engineering"
  },

  {
    id:"startup-karnataka",
    title:"STARTUP KARNATAKA",
    tag:"INCUBATOR",
    about:"Government-backed startup ecosystem supporting innovation, funding, and incubation across Karnataka.",
    location:"Karnataka",
    foundingYear:"2016",
    logo:"KARNATAKA",
    programType:"Both",
    instType:"Government"
  },

  {
    id:"iiser-pune",
    title:"IISER PUNE INCUBATION",
    tag:"INCUBATOR",
    about:"Supports science-based startups in biotechnology, chemistry, and research-driven innovation.",
    location:"Pune, Maharashtra",
    foundingYear:"2018",
    logo:"IISER",
    programType:"Incubator",
    instType:"Research Institute"
  },

  {
    id:"cufe-incubator",
    title:"CHRIST UNIVERSITY INCUBATION",
    tag:"INCUBATOR",
    about:"Supports student-led startups with mentoring, incubation, and business support programs.",
    location:"Bangalore, Karnataka",
    foundingYear:"2016",
    logo:"CHRIST",
    programType:"Incubator",
    instType:"University"
  },

  {
    id:"flame-incubator",
    title:"FLAME UNIVERSITY INCUBATION",
    tag:"INCUBATOR",
    about:"Supports entrepreneurship among students through mentoring, funding support, and incubation programs.",
    location:"Pune, Maharashtra",
    foundingYear:"2018",
    logo:"FLAME",
    programType:"Incubator",
    instType:"University"
  },

  {
    id:"tiss-incubator",
    title:"TISS INCUBATION",
    tag:"INCUBATOR",
    about:"Supports social impact startups focusing on development, sustainability, and public policy innovation.",
    location:"Mumbai, Maharashtra",
    foundingYear:"2017",
    logo:"TISS",
    programType:"Incubator",
    instType:"University"
  },

  {
    id:"ximb-incubator",
    title:"XIMB INCUBATION",
    tag:"INCUBATOR",
    about:"Supports startups through mentorship, funding access, and business incubation programs.",
    location:"Bhubaneswar, Odisha",
    foundingYear:"2016",
    logo:"XIMB",
    programType:"Incubator",
    instType:"Business School"
  },

  {
    id:"spjain-incubator",
    title:"SPJIMR INCUBATION",
    tag:"INCUBATOR",
    about:"Supports startups in management, social impact, and innovation through structured programs.",
    location:"Mumbai, Maharashtra",
    foundingYear:"2015",
    logo:"SPJ",
    programType:"Incubator",
    instType:"Business School"
  },

  {
    id:"nmims-incubator",
    title:"NMIMS INCUBATION",
    tag:"INCUBATOR",
    about:"Supports student entrepreneurs through incubation, mentoring, and startup support programs.",
    location:"Mumbai, Maharashtra",
    foundingYear:"2016",
    logo:"NMIMS",
    programType:"Incubator",
    instType:"University"
  },

  {
    id:"symbiosis-incubator",
    title:"SYMBIOSIS INCUBATION",
    tag:"INCUBATOR",
    about:"Supports startups with mentorship, incubation programs, and ecosystem support.",
    location:"Pune, Maharashtra",
    foundingYear:"2016",
    logo:"SYMBIOSIS",
    programType:"Incubator",
    instType:"University"
  },

  {
    id:"manipal-incubator",
    title:"MANIPAL UNIVERSITY INCUBATION",
    tag:"INCUBATOR",
    about:"Supports startups in healthcare, technology, and innovation through incubation programs and mentoring.",
    location:"Manipal, Karnataka",
    foundingYear:"2015",
    logo:"MANIPAL",
    programType:"Incubator",
    instType:"University"
  },

  {
    id:"lpu-incubator",
    title:"LPU INCUBATION",
    tag:"INCUBATOR",
    about:"Lovely Professional University incubation center supports student startups with mentorship and funding opportunities.",
    location:"Punjab",
    foundingYear:"2017",
    logo:"LPU",
    programType:"Incubator",
    instType:"University"
  }
];