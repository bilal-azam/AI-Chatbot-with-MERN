// server/routes/auth.js
const nodemailer = require('nodemailer');
const crypto = require('crypto');

// Request password reset
router.post('/password-reset', async (req, res) => {
    const { email } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) return res.status(400).json({ msg: 'User does not exist' });

        // Generate token
        const resetToken = crypto.randomBytes(20).toString('hex');
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = Date.now() + 3600000; // 1 hour
        await user.save();

        // Send email
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'your-email@example.com',
                pass: 'your-email-password'
            }
        });

        const mailOptions = {
            to: user.email,
            from: 'passwordreset@example.com',
            subject: 'Password Reset',
            text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.


            Please click on the following link, or paste this into your browser to complete the process:


            http://localhost:5000/reset/resetToken


            If you did not request this, please ignore this email and your password will remain unchanged.`
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ msg: 'Password reset link sent to your email' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});