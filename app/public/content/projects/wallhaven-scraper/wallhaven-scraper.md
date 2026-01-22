# 🖼️ Wallhaven Wallpaper Scraper

A Python script to easily download wallpapers from [Wallhaven](https://wallhaven.cc/).  
Fetch wallpapers using **Latest**, **Toplist**, **Random**, or perform a **manual search** with full control over keywords, purity, sorting, and resolution.

---


## ✨ Features

- 🔥 Download **Latest**, **Toplist**, or **Random** wallpapers automatically  
- 🔍 Perform **manual searches** using custom keywords  
- 🧼 Filter wallpapers by **purity**:
  - SFW (Safe For Work)
  - Sketchy (Semi-NSFW)
  - NSFW (Not Safe For Work)  
- 📁 Automatically skips duplicates and saves wallpapers into **organized folders**  
- 🖥️ Supports **custom minimum resolution** for high-quality downloads  
- 🔑 **NSFW content** requires a valid Wallhaven **API key**

---


## 🧰 Requirements

- 🐍 **Python 3.x**
<!-- - `requests` library (`pip install requests`)   -->

---


## 🚀 Usage

1. Clone or download this repository.  
2. Open `wallhaven_scraper.py` and optionally add your **API key** at the top to access NSFW content:  

```python
api_key = "YOUR_API_KEY"
```

3. Run the script:  
```python
python3 wallhaven_scraper.py
```

4. Follow the prompts:
- 📂 **Select an option:**
    - Latest wallpapers
    - Toplist wallpapers
    - Random wallpapers
    - Manual search
- 🔎 **Enter search term** (manual search only).
- 🧼 **Set purity:**
    - `100` = SFW (Safe For Work)
    - `010` = Sketchy (Semi Not Safe For Work)
    - `111` = NSFW (Not Safe For Work)
- 🔀 **Choose sorting** (manual search only): `relevance`, `random`, `views`, `favorites`, `toplist`
- 📄 **Specify number of pages** (1 page ≈ 24 wallpapers).

5. Wallpapers will be downloaded to:
```javascript
~/Downloads/Wallhaven/<search_term_or_sorting>/
```


## Notes
- 📉 If your search term yields limited results, try using a **more specific keyword**.
- 🖥️ Update the `atleast` parameter in the script if you want to **download a different minimum resolution**.
- 🔐 NSFW content requires a valid API key. Create an account at [Wallhaven](https://wallhaven.cc/) to access your key.


## Example
Here’s a quick demo of the Wallhaven scraper in action:

![Wallhaven Scraper Demo](https://github.com/Uzy777/Mini-Projects/raw/main/Scripts/wallhaven-scraper/screengif.gif)

---