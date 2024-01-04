// server/routes/auth.js
// Reset password
router.post('/reset/:token', async (req, res) => {
    const { token } = req.params;
    const { newPassword } = req.body;
    try {
        let user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        });
        if (!user) return res.status(400).json({ msg: 'Password reset token is invalid or has expired' });

        // Set new password
        user.password = await bcrypt.hash(newPassword, 10);
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        await user.save();

        res.status(200).json({ msg: 'Password has been reset successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});