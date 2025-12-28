export const otp_message = (
  item,
) => `<div style="background:#000;color:white;padding:20px;border-radius:10px">
      <h2>Your OTP Code</h2>
      <p style="font-size:24px;letter-spacing:2px">${item}</p>
      <p>This code expires in 10 minutes.</p>
</div>`;

export const NewBoy = (item) => `
  <div style="background:#000; color:white; font-family:Arial, sans-serif; padding:30px; border-radius:15px;">
    <h1 style="color:#00bcd4; text-align:center;">Welcome to Safis Events, ${item}!</h1>
    <p style="font-size:16px; text-align:center;">
      We’re thrilled to have you on board. Your account has been created successfully, 
      and you can now buy tickets and host events.
    </p>
    <div style="text-align:center; margin-top:25px;">
      <a href="https://yourdomain.com/signin" 
         style="background:#00bcd4; color:white; padding:12px 24px; border-radius:8px; text-decoration:none; font-weight:bold;">
        Sign In Now
      </a>
    </div>
    <p style="margin-top:30px; font-size:14px; text-align:center; color:#bbb;">
      Thank you for joining us. Let's make your URLs smarter.
    </p>
  </div>
`;

export const OldBoy = (item) => `
  <div style="background:#000; color:white; font-family:Arial, sans-serif; padding:30px; border-radius:15px;">
    <h1 style="color:#00bcd4; text-align:center;">Welcome Back, ${item}!</h1>
    <p style="font-size:16px; text-align:center;">
      It’s great to see you again. We’ve missed your presence in our community.
    </p>
    <div style="text-align:center; margin-top:25px;">
      <a href="https://yourdomain.com/short" 
         style="background:#00bcd4; color:white; padding:12px 24px; border-radius:8px; text-decoration:none; font-weight:bold;">
        Go to Dashboard
      </a>
    </div>
    <p style="margin-top:30px; font-size:14px; text-align:center; color:#bbb;">
      Keep creating, keep buying — we’re glad you’re here.
    </p>
  </div>
`;

export const password_reset = () => `<div style="background:#000;color:white;padding:20px;border-radius:10px">
      <h2>Your Password</h2>
      <p style="font-size:24px;letter-spacing:2px">it has been reset succesfully</p>
      <p>This code expires in 10 minutes.</p>
</div>`;