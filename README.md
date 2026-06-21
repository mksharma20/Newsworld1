# 📰 UdaipurTimes - News Portal Clone

UdaipurTimes.com jaisa ek pura news portal - **bina server ke bhi kaam karta hai!**  
GitHub Pages pe host kar sakte hain, baad mein kisi bhi server pe shift kar sakte hain.

---

## ✨ Features

### 🌐 Public Website
- **Homepage** - Featured articles, Breaking news ticker, Category sections
- **Article Page** - Full article with share buttons (Facebook, Twitter, WhatsApp)
- **Category Pages** - Filter by category with Load More
- **Search** - Title, content, tags sab mein search
- **Responsive Design** - Mobile, Tablet, Desktop sab pe kaam karta hai
- **Breaking News Ticker** - Auto-scroll

### 🔐 Admin Panel (`/admin/`)
- **Secure Login** - Password protected
- **Dashboard** - Stats (total articles, views, featured, breaking)
- **Article Manager** - List, Edit, Delete, Filter, Search
- **Article Editor** - Rich text editor with HTML support
  - Bold, Italic, Underline
  - H2, H3 headings
  - Links, Images, Quotes
  - Image URL preview
- **Featured & Breaking** - Checkbox se set karein
- **Export/Import** - JSON backup
- **Password Change** - Settings mein
- **Default Password:** `admin123`

---

## 🚀 GitHub Pages pe Deploy Karna

### Step 1: GitHub pe Upload
```bash
# Git initialize karein
git init
git add .
git commit -m "Initial commit - UdaipurTimes clone"

# GitHub pe new repository banayein aur push karein
git remote add origin https://github.com/AAPKA_USERNAME/news-portal.git
git branch -M main
git push -u origin main
```

### Step 2: GitHub Pages Enable Karein
1. Repository → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **main** → **/ (root)**
4. **Save** click karein
5. 2-3 minute mein site live ho jayegi:  
   `https://AAPKA_USERNAME.github.io/news-portal/`

---

## 📁 File Structure

```
news-portal/
├── index.html          ← Homepage
├── article.html        ← Article detail page
├── category.html       ← Category listing
├── search.html         ← Search results
├── css/
│   └── style.css       ← Puri styling
├── js/
│   ├── data.js         ← Data management (localStorage)
│   └── main.js         ← Homepage JS
└── admin/
    ├── index.html      ← Admin login
    └── dashboard.html  ← Admin panel
```

---

## 💾 Data Storage

- Articles **localStorage** mein save hote hain (browser storage)
- GitHub Pages pe **bina server ke** kaam karta hai
- **Export** karke JSON backup le sakte hain
- Jab server milega tab **MySQL/MongoDB** mein migrate kar sakte hain

---

## 🔑 Admin Access

- URL: `https://aapki-site.com/admin/`
- Default Password: **admin123**
- Settings mein password badlein

---

## 🛠️ Server pe Shift Karna (Baad mein)

Jab server lenge tab bas `data.js` mein localStorage ki jagah **API calls** daal deni hongi.  
Backend PHP/Node.js/Python kuch bhi use kar sakte hain.

---

## 📱 Categories

news, hindi, travel, education, sports, crime, business, technology, events, administration, blog, lifestyle, health

---

**Made with ❤️ for Udaipur**
