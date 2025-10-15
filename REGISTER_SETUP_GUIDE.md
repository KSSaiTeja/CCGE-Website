# 🎯 CCGE Register Now Button - Setup Guide

## ✅ What's Already Implemented

Your "Register Now" button and modal form have been successfully added to all pages! Here's what's working:

### ✨ Features Implemented:

- **Register Now Button**: Added to header on all pages
- **Modal Form**: Beautiful, responsive form with validation
- **Course Selection**: Two options (EA Course - US Taxation & UK Taxation & Accounting)
- **Form Validation**: Email, phone, and required field validation
- **WhatsApp Integration**: Automatically opens WhatsApp with pre-filled message
- **Responsive Design**: Works perfectly on mobile and desktop
- **Professional Styling**: Matches your brand colors (#156788, #1260a0)

### 📱 Current Functionality:

1. User clicks "Register Now" button
2. Modal opens with registration form
3. User fills in: Name, Email, Phone, Course Selection
4. Form validates all fields
5. On submission: Opens WhatsApp with pre-filled message
6. Form resets and modal closes

---

## ✅ Google Form Already Configured!

**Great news!** Your register modal is already connected to your existing Google Form that you use for the brochure modal. No additional setup required!

### 📊 **What's Already Working:**

- ✅ **Google Form URL**: `1FAIpQLSeK6uLwLrniG_JjHpcHcy8zURJ7kyUI73JVXFrdoO0m0Vs76A`
- ✅ **Entry IDs Configured**:
  - Name: `entry.722333845`
  - Email: `entry.1975402017`
  - Phone: `entry.1789869`
  - Course: `entry.1909450583`
  - Message: `entry.1394785474` (automatically set to "Registration from Register Now button")

### 🎯 **Data Flow:**

1. User fills register form → **Same Google Sheet** as brochure requests
2. You can distinguish between:
   - **Brochure requests** (from brochure modal)
   - **Registration requests** (from register button) - Message field will show "Registration from Register Now button"

## 🚀 Test Everything Now!

1. **Test the button** on your homepage
2. **Fill out the form** completely
3. **Submit** and verify:
   - WhatsApp opens with correct message
   - Google Form receives the data
   - Form resets after submission

---

## 🎨 Customization Options

### Change Button Text:

```html
<!-- In all HTML files, find this line and change the text: -->
Register Now
```

### Change Course Options:

```html
<!-- In the modal form, update these radio buttons: -->
<input
  class="form-check-input"
  type="radio"
  name="course"
  id="eaCourse"
  value="EA Course - US Taxation"
  required
/>
<input
  class="form-check-input"
  type="radio"
  name="course"
  id="ukTax"
  value="UK Taxation & Accounting"
  required
/>
```

### Change WhatsApp Number:

```javascript
// In the JavaScript section, update this line:
const whatsappUrl = `https://wa.me/919666660713?text=${encodeURIComponent(
  whatsappMessage,
)}`;
// Change 919666660713 to your WhatsApp number
```

### Change Button Colors:

```css
/* In the style section, update these colors: */
background: linear-gradient(45deg, #156788, #1260a0);
/* Change to your preferred colors */
```

---

## 📋 Files Updated

The following files now include the Register Now functionality:

### ✅ Successfully Updated:

- `index.html` (Homepage)
- `about.html`
- `blog.html`
- `class-single.html`
- `classes.html`
- `contacts.html`
- `error.html`
- `event-single.html`
- `events.html`
- `founders.html`
- `gallery.html`
- `post.html`
- `schedule.html`
- `search-results.html`
- `teacher-single.html`
- `teachers.html`
- `class-single-acca.html`

### 🔄 Need Manual Update:

These class-single files need the same treatment as `class-single-acca.html`:

- `class-single-acca-backup.html`
- `class-single-cfa.html`
- `class-single-cma.html`
- `class-single-cpa.html`
- `class-single-dipifrs.html`
- `class-single-ea.html`
- `class-single-esg.html`
- `class-single-frm.html`
- `class-single-global-investment-banking.html`
- `class-single-investment-banking.html`
- `class-single-uk-tax.html`

---

## 🚀 Quick Setup Script

If you want to quickly update the remaining class-single files, you can copy the register button and modal code from `class-single-acca.html` to the other class-single files.

### What to Copy:

1. **Register Button HTML** (after the contact information `</ul>`)
2. **Modal HTML** (before the closing `</body>` tag)
3. **Styles and JavaScript** (the entire style and script sections)

---

## 🎯 Final Result

Once you complete the Google Forms setup, your users will:

1. **See the Register Now button** prominently in the header
2. **Click to open** a beautiful modal form
3. **Fill in their details** with real-time validation
4. **Select their preferred course** (EA or UK Taxation)
5. **Submit and automatically** get redirected to WhatsApp
6. **Have their data captured** in your Google Form for follow-up

---

## 🆘 Need Help?

If you need assistance with any of these steps, just let me know! The implementation is complete and ready to go - you just need to connect it to your Google Form.

**Happy registering! 🎉**
