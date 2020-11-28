const query = require('../helpers/query');

module.exports = {
    getLastMessage: (id_user, search) => query(
        `select m.*, users.email 
        from  chats m 
        left join chats m1 on (
            (
                (m.id_sender = m1.id_sender and m.id_receiver = m1.id_receiver)
                or
                (m.id_sender = m1.id_receiver and m.id_receiver = m1.id_sender )
            ) 
            and case when m.created_at = m1.created_at
            then m.id < m1.id else m.created_at < m1.created_at end
        ) 
        INNER JOIN users 
        on (m.id_sender = users.id OR m.id_receiver = users.id) 
        WHERE users.id != ${id_user} 
        AND m1.id is null and ${id_user} in(m.id_sender, m.id_receiver) 
        AND (m.message like '%${search}%' OR users.email like '%${search}%') GROUP BY m.id
        ORDER BY created_at DESC`
    ),
    getIdMessage: (id_sender, id_receiver) => query(
        `SELECT
            chats.*,
            users.email as sender_name
        FROM chats INNER JOIN users
        ON users.id=chats.id_sender
        WHERE
            (id_sender=${id_sender} AND id_receiver=${id_receiver})
        ||
            (id_sender=${id_receiver} AND id_receiver=${id_sender})`
    ),
    postMessage: (setData) => query(`insert into chats set ?`, setData),
    patchMessage: (setData, id) => query('Update chats set ? where id=?', [setData, id]),
    deleteMessage: (id) => query('delete from chats where id=?', id)
    
}