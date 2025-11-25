# EmailJS Setup Instructions

Follow these steps to configure EmailJS for your contact form:

## 1. Create EmailJS Account
- Go to [EmailJS.com](https://www.emailjs.com/)
- Sign up with your Google account (devopsduoo@gmail.com)

## 2. Add Email Service - UPDATED METHOD
- Go to **Email Services** in the dashboard
- Click **Add New Service**
- **SELECT: Gmail** (not Personal Email Service)
- Click **Connect Account**
- Sign in with devopsduoo@gmail.com
- **Grant ALL permissions** when prompted
- This uses Gmail OAuth2 (no App Password needed)
- Note down the **Service ID**

**Why this works better:**
- No SMTP configuration needed
- No App Passwords required
- Gmail OAuth2 handles authentication
- More reliable connection

## 3. Create Email Template
- Go to **Email Templates**
- Click **Create New Template**
- Use this template:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Phone: {{phone}}
Company: {{company}}

Message:
{{message}}
```

- Save the template and note down the **Template ID**

## 4. Get Public Key
- Go to **Account** → **General**
- Copy your **Public Key**

## 5. Update Environment Variables
Edit `.env.local` and replace the placeholder values:

```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

## 6. Update contact/page.tsx
Replace the placeholders in the code with environment variables or directly with your keys.

## 7. Restart Development Server
```bash
npm run dev
```

## Test the Form
- Fill out the contact form on your website
- Check devopsduoo@gmail.com inbox for the email
- If it doesn't work, check the browser console for errors

## Troubleshooting

### Error: "Greeting never received" or SMTP timeout
**Root Cause:** EmailJS SMTP service having connection issues with Gmail

**BEST SOLUTION:** Use Gmail OAuth2 (see Step 2)
1. Remove Personal Email Service
2. Add **Gmail** service instead
3. Use **Connect Account** button
4. Sign in and grant all permissions
5. This bypasses SMTP completely

### Error: "insufficient authentication scopes"  
**Solution:** When connecting Gmail OAuth2:
1. Make sure to grant ALL permissions
2. If error persists, disconnect and reconnect
3. Check all permission boxes

### Error: "Invalid login" or "BadCredentials"
This happens with Personal Email Service - use Gmail OAuth2 instead (see above)

### Alternative: Use a Different Email Service
If Gmail OAuth2 still doesn't work, try:
1. **Outlook/Hotmail** - Usually works well with EmailJS
2. **SendGrid** - Free tier available
3. **Mailgun** - Free tier available
4. Create a new email specifically for the website

---

**Important:** Keep your `.env.local` file private and never commit it to Git!
