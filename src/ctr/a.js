
exports.getCtr = function*(next){
    console.log('aaaaaaaaa')
    this.body = yield render('a.html',{
        title : 'aaaaaaaaaa'
    })
}