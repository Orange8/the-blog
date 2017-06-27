module.exports = function(req,res){
  res.render('chart', {
    title: '聊天室',
    user: req.session.user,
    success: req.flash('success').toString(),
    error: req.flash('error').toString()
  });
};