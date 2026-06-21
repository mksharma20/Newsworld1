// ============================================================
// DATA.JS - Article Storage & Management (localStorage based)
// GitHub Pages pe kaam karta hai bina server ke
// ============================================================

const DB = {
  STORAGE_KEY: 'ut_articles',
  SETTINGS_KEY: 'ut_settings',

  // Default sample articles
  defaultArticles: [
    {
      id: 1,
      title: "Udaipur ke Fateh Sagar Lake mein Monsoon ke baad paani ka star badha",
      slug: "fateh-sagar-lake-monsoon-water-level",
      category: "news",
      tags: ["udaipur", "lake", "monsoon"],
      excerpt: "Is saal bharpoor baarish ke baad Fateh Sagar Lake mein paani ka star kaafi badh gaya hai, jo sheher vasiyon ke liye rahat ki khabar hai.",
      content: "<p>Udaipur mein is saal monsoon ki bharpoor baarish ke baad Fateh Sagar Lake mein paani ka star kaafi badh gaya hai. Sheher vasiyon aur tourists ke liye yeh ek bahut badi rahat ki khabar hai.</p><p>Jal sansthan ke adhikariyon ke mutabik, lake mein abhi paani ki kshamata ke kareeb 80 pratishat paani bhar chuka hai. Pichle saal is samay tak sirf 55 pratishat hi bhari thi.</p><p>Udaipur ke logon ka manna hai ki agar monsoon aise hi jaari raha, toh is saal paani ki koi samasya nahi hogi. Sheher ke mukhya paryatan sthal Pichola Lake mein bhi paani ka star bahut achha hai.</p><h2>Paryatan par prabhav</h2><p>Bhare hue lakes ke saath Udaipur ka prakritik saundarya aur bhi badh gaya hai, jis karan desh-videsh se aane wale paryatakoin ki sankhya mein bhi izaafa ho raha hai. Hotels aur resorts mein bookings mein bhi teji aayi hai.</p>",
      image: "",
      author: "Rajesh Sharma",
      date: new Date(Date.now() - 2 * 3600000).toISOString(),
      views: 1247,
      featured: true,
      breaking: true
    },
    {
      id: 2,
      title: "Udaipur Smart City Project ke tahat nayi sadkon ka nirman shuru",
      slug: "udaipur-smart-city-road-construction",
      category: "administration",
      tags: ["smart city", "roads", "development"],
      excerpt: "Smart City Mission ke antargat Udaipur mein kaafi nayi sadkon ka nirman kaam shuru ho gaya hai, jisse sheher ki traffic vyavastha sudhregi.",
      content: "<p>Udaipur Smart City Project ke antargat sheher mein kaafi nayi sadkon aur infrastructure ka nirman kaam tezi se chhal raha hai. Is pariyojana se sheher vasiyon ko kaafi suvidha milne ki ummeed hai.</p><p>Nagar Nigam ke adhikari ne bataya ki is project mein total 45 karод rupaye kharch kiye ja rahe hain. Sadkon ke saath-saath footpaths, street lights aur drainage system bhi sudhar kiye ja rahe hain.</p>",
      image: "",
      author: "Priya Mehta",
      date: new Date(Date.now() - 5 * 3600000).toISOString(),
      views: 892,
      featured: false,
      breaking: false
    },
    {
      id: 3,
      title: "Udaipur mein naya Tech Park khulne se 5000 logon ko milega rozgar",
      slug: "udaipur-tech-park-employment",
      category: "business",
      tags: ["technology", "jobs", "business"],
      excerpt: "Rajasthan sarkar ki nai niti ke tahat Udaipur mein ek bade Tech Park ka nirman hoga jisme hazaaron IT professionals ko rozgar mil sakta hai.",
      content: "<p>Udaipur mein ek nayi IT company ne apna Tech Park kholne ki ghoshna ki hai. Is Tech Park mein lagbhag 5000 se adhik logon ko rozgar milne ki sambhavna hai.</p><p>Company ke CEO ne bataya ki yeh Udaipur ka sabse bada IT hub banega aur iske liye sarkar se bahut sahayata mil rahi hai. Construction ka kaam agle 6 mahine mein shuru hoga.</p>",
      image: "",
      author: "Ankit Joshi",
      date: new Date(Date.now() - 8 * 3600000).toISOString(),
      views: 2341,
      featured: false,
      breaking: false
    },
    {
      id: 4,
      title: "Maharana Pratap Airport pe nai flight services ki ghoshna",
      slug: "udaipur-airport-new-flights",
      category: "news",
      tags: ["airport", "flights", "travel"],
      excerpt: "Udaipur ke Maharana Pratap Airport se ab aur bhi nayi cities ke liye direct flights uplabdh hongi, jisse paryatan ko badawa milega.",
      content: "<p>Maharana Pratap Airport Udaipur se kuch nayi airlines ne apni services shuru karne ki ghoshna ki hai. In nayi flights se Udaipur ki connectivity kaafi behtar hogi.</p><p>Airport Director ne bataya ki Mumbai, Delhi, aur Bangalore ke liye daily direct flights mein badhotari hogi. Saath hi Hyderabad aur Chennai ke liye bhi new routes add hone wale hain.</p>",
      image: "",
      author: "Sunita Patel",
      date: new Date(Date.now() - 12 * 3600000).toISOString(),
      views: 1876,
      featured: true,
      breaking: false
    },
    {
      id: 5,
      title: "City Palace Museum mein nai exhibition 'Rajputana Heritage' shuru",
      slug: "city-palace-rajputana-heritage-exhibition",
      category: "travel",
      tags: ["city palace", "museum", "heritage", "tourism"],
      excerpt: "Udaipur ke mash'hoor City Palace Museum mein ek nayi exhibition ka aagaz hua hai jo Rajputana ke gauravshali itihas ko darshata hai.",
      content: "<p>Udaipur ke prasiddh City Palace Museum mein 'Rajputana Heritage' naam ki ek vishesh exhibition shuru ki gayi hai. Is exhibition mein Mewar ke itihas ke baare mein bahut interesting jaankari di gayi hai.</p><p>Museum ke Director ne bataya ki is exhibition mein 500 saal puraane paintings, hathiyar, aur Maharanas ke personal belongings ko darshaya gaya hai. Yeh exhibition 3 mahine tak chalegi.</p>",
      image: "",
      author: "Kavita Singh",
      date: new Date(Date.now() - 24 * 3600000).toISOString(),
      views: 3102,
      featured: false,
      breaking: false
    },
    {
      id: 6,
      title: "Udaipur ke chhatra ne national science olympiad mein gold medal jeeta",
      slug: "udaipur-student-science-olympiad-gold",
      category: "education",
      tags: ["student", "olympiad", "science", "achievement"],
      excerpt: "Udaipur ke ek hoshiyar chhatra ne National Science Olympiad mein gold medal jeetkar sheher ka naam roshan kiya hai.",
      content: "<p>Udaipur ke Shri Geeta Bal Mandir school ke ek pratvibhashali chhatra Arjun Rathore ne National Science Olympiad 2024 mein gold medal jeeta hai. Yeh sheher ke liye garv ka kshan hai.</p><p>Arjun ne Physics aur Mathematics mein remarkable performance dekar is pratiyogita mein top position hasil ki. School principal ne bataya ki Arjun bahut mehnat karne wala chhatra hai.</p>",
      image: "",
      author: "Deepak Verma",
      date: new Date(Date.now() - 36 * 3600000).toISOString(),
      views: 987,
      featured: false,
      breaking: false
    },
    {
      id: 7,
      title: "Rajasthan Premier League mein Udaipur team ne diya shandar prdarshan",
      slug: "udaipur-team-rajasthan-premier-league",
      category: "sports",
      tags: ["cricket", "sports", "rajasthan"],
      excerpt: "Rajasthan Premier League cricket tournament mein Udaipur ki team ne hamare baiters ki shandar batting se ek yaadgaar jeet darj ki.",
      content: "<p>Rajasthan Premier League cricket tournament mein Udaipur Warriors team ne ek rochak muqable mein Jaipur Royals ko harakar shandar jeet darj ki. Match mein Udaipur ke batsmon ne adbhut performance diya.</p><p>Team ke Captain Vikas Sharma ne 75 runs ki nabaad pari kheli aur team ko jeet dilaayi. Is jeet ke baad Udaipur Warriors points table mein teen nambr par aa gayi hai.</p>",
      image: "",
      author: "Mahesh Chouhan",
      date: new Date(Date.now() - 48 * 3600000).toISOString(),
      views: 1543,
      featured: false,
      breaking: false
    },
    {
      id: 8,
      title: "Udaipur mein cyber fraud ke naye mamle samne aaye, police ne alert jaari kiya",
      slug: "udaipur-cyber-fraud-police-alert",
      category: "crime",
      tags: ["cyber", "fraud", "police", "alert"],
      excerpt: "Sheher mein cyber fraud ke kuch nayi ghatnaon ke baad police ne nagarikok ko sabdhan rehne ki salah di hai aur helpline number jaari kiya hai.",
      content: "<p>Udaipur police ne cyber fraud ke badh rahe mamlon ke bich nagarikok ke liye ek advisory jaari ki hai. Pichhle kuch dino mein sheher mein kai cyber fraud ki ghatnayen samne aayi hain.</p><p>SP Udaipur ne bataya ki logon ko anjaane links par click nahi karna chahiye aur apni bank details kisi ke saath share nahi karni chahiye. Cyber crime helpline number 1930 par complaint darj kar sakte hain.</p>",
      image: "",
      author: "Rakesh Kumar",
      date: new Date(Date.now() - 60 * 3600000).toISOString(),
      views: 2234,
      featured: false,
      breaking: true
    }
  ],

  // Get all articles
  getAll() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (!stored) {
      this.saveAll(this.defaultArticles);
      return this.defaultArticles;
    }
    return JSON.parse(stored);
  },

  // Save all articles
  saveAll(articles) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(articles));
  },

  // Get by ID
  getById(id) {
    return this.getAll().find(a => a.id === parseInt(id));
  },

  // Get by slug
  getBySlug(slug) {
    return this.getAll().find(a => a.slug === slug);
  },

  // Get by category
  getByCategory(cat, limit = null) {
    let articles = this.getAll().filter(a => a.category === cat);
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    return limit ? articles.slice(0, limit) : articles;
  },

  // Get featured
  getFeatured(limit = 5) {
    let articles = this.getAll().filter(a => a.featured);
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    if (articles.length < limit) {
      const nonFeatured = this.getAll().filter(a => !a.featured)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
      articles = [...articles, ...nonFeatured];
    }
    return articles.slice(0, limit);
  },

  // Get breaking
  getBreaking() {
    return this.getAll().filter(a => a.breaking);
  },

  // Get latest
  getLatest(limit = 10) {
    return this.getAll()
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, limit);
  },

  // Get most viewed
  getMostViewed(limit = 5) {
    return this.getAll()
      .sort((a, b) => b.views - a.views)
      .slice(0, limit);
  },

  // Search
  search(query) {
    const q = query.toLowerCase();
    return this.getAll().filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q) ||
      a.tags.some(t => t.toLowerCase().includes(q))
    );
  },

  // Add article
  add(article) {
    const articles = this.getAll();
    const maxId = articles.length > 0 ? Math.max(...articles.map(a => a.id)) : 0;
    article.id = maxId + 1;
    article.slug = article.slug || this.makeSlug(article.title);
    article.date = article.date || new Date().toISOString();
    article.views = 0;
    articles.unshift(article);
    this.saveAll(articles);
    return article;
  },

  // Update article
  update(id, data) {
    const articles = this.getAll();
    const idx = articles.findIndex(a => a.id === parseInt(id));
    if (idx === -1) return null;
    articles[idx] = { ...articles[idx], ...data };
    this.saveAll(articles);
    return articles[idx];
  },

  // Delete article
  delete(id) {
    const articles = this.getAll().filter(a => a.id !== parseInt(id));
    this.saveAll(articles);
  },

  // Increment views
  incrementViews(id) {
    const articles = this.getAll();
    const idx = articles.findIndex(a => a.id === parseInt(id));
    if (idx !== -1) {
      articles[idx].views = (articles[idx].views || 0) + 1;
      this.saveAll(articles);
    }
  },

  // Make slug from title
  makeSlug(title) {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
      .substring(0, 80) + '-' + Date.now();
  },

  // Category info
  categories: {
    news: { label: 'Latest News', icon: 'fa-newspaper' },
    hindi: { label: 'Hindi News', icon: 'fa-language' },
    travel: { label: 'Travel', icon: 'fa-plane' },
    education: { label: 'Education', icon: 'fa-graduation-cap' },
    sports: { label: 'Sports', icon: 'fa-futbol' },
    crime: { label: 'Crime', icon: 'fa-shield-halved' },
    business: { label: 'Business', icon: 'fa-chart-line' },
    technology: { label: 'Technology', icon: 'fa-microchip' },
    events: { label: 'Events', icon: 'fa-calendar-star' },
    administration: { label: 'Administration', icon: 'fa-building-columns' },
    blog: { label: 'Blog', icon: 'fa-pen-nib' },
    lifestyle: { label: 'Lifestyle', icon: 'fa-heart' },
    health: { label: 'Health', icon: 'fa-kit-medical' }
  },

  // Format date
  formatDate(dateStr) {
    const d = new Date(dateStr);
    const now = new Date();
    const diff = Math.floor((now - d) / 1000);
    if (diff < 60) return 'Abhi abhi';
    if (diff < 3600) return Math.floor(diff / 60) + ' minute pehle';
    if (diff < 86400) return Math.floor(diff / 3600) + ' ghante pehle';
    if (diff < 604800) return Math.floor(diff / 86400) + ' din pehle';
    return d.toLocaleDateString('hi-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  },

  // Get settings
  getSettings() {
    const s = localStorage.getItem(this.SETTINGS_KEY);
    return s ? JSON.parse(s) : {
      siteName: 'UdaipurTimes',
      tagline: 'Taking Local Global',
      adminPassword: 'admin123',
      articlesPerPage: 12
    };
  },

  saveSettings(settings) {
    localStorage.setItem(this.SETTINGS_KEY, JSON.stringify(settings));
  }
};

// Default no-image SVG as data URL
const NO_IMAGE_SVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250'%3E%3Crect fill='%23c0392b' width='400' height='250'/%3E%3Ctext fill='%23ffffff' font-family='Arial' font-size='40' x='50%25' y='50%25' text-anchor='middle' dy='.35em'%3E📰%3C/text%3E%3C/svg%3E`;
