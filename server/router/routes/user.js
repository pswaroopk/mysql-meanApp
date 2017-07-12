'use strict';

module.exports = (app, db) => {
  app.get('/users', (req, res) => {
    db.userNames.findAll({
      include: [
        {
          model: db.userProfiles
        }
      ]
    })
    .then(data => {
      const resObj = data.map(user =>{
        return Object.assign(
          {},
          {
            user_id: user.user_id,
            full_name: user.full,
            display: user.display,
            first: user.first,
            last: user.last,
            profiles: user.user_profiles.map(profile =>{
              return Object.assign(
                {},
                {
                  mobile: profile.mobile_number,
                  email: profile.email
                }
              )
            })
          }
        )
      })
      res.json(resObj)
    });
  });

}
