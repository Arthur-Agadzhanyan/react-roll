//-1001244547018
module.exports = async (req, res) => {
    
    if (req.method === "POST") {
        try {
            const { name, home, street, phone, apartment,basket } = req.body
            const token = '1475823188:AAEskxFgHa252XK0x5aGLhiJBkmct-Od7JA'
            let url = `https://api.telegram.org/bot1475823188:AAEskxFgHa252XK0x5aGLhiJBkmct-Od7JA/sendMessage?chat_id=-1001244547018&text=Имя: ${name}\nДом: ${home}\nУлица: ${street}\nТелефон: ${phone}\nКвартира: ${apartment}\n\nЗаказ:\n${basket}`
            url=encodeURI(url)
            await fetch(url)
            res.status(201).json({ message:'Всё ок' })
        } 
        catch (e) {
            res.status(500).json({message: `Ошибка сервера ${e}`})
         }
    }
}