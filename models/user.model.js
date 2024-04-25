const db = require('../util/database');
const bcrypt = require('bcryptjs');

module.exports = class Usuario {
    //Constructor de la clase. Sirve para crear un nuevo objeto, y en él se definen las propiedades del modelo
    constructor(mi_username, mi_nombre, mi_password) {
        this.username = mi_username;
        this.nombre = mi_nombre;
        this.password = mi_password;
    }
    //Este método servirá para guardar de manera persistente el nuevo objeto. 
    save() {
        return bcrypt.hash(this.password, 12)
        .then(async(password_cifrado) => {
            try {
                await db.execute(
                `CALL registrar_user(?, ?, ?)`, 
                [this.username, this.nombre, password_cifrado]
                );

            return db.execute(
                'CALL default_rol(?)', 
                [this.username]
                );
            }catch(error) {
                console.log(error);
                throw Error('Usuario duplicado');
            }
        });
    }
    static fetchOne(username) {
        return db.execute('Select * from usuario WHERE username = ?', [username]);
    }

    static getPermisos(username) {
        return db.execute(`
            SELECT permiso
            FROM privilegio pr, posee po, rol r, asigna a, usuario u
            WHERE u.username = ? AND u.username = a.username AND
            a.idrol = r.id AND r.id = po.idrol AND po.idpermiso = pr.id
        `, [username]);
    }
    
}