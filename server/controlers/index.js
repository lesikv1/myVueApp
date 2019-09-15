const User = require('../models/user')

class Controller {
  static async createUser (req, res) {
    const user = new User()

    const { firstName, lastName, numberPhone, favorite } = req.body
    if(!firstName || !lastName || !numberPhone) {
      return res.json({
        success: false,
        error: 'You must provide an author and user'
      })
    }
    user.firstName = firstName
    user.lastName = lastName
    user.numberPhone = numberPhone
    user.favorite = favorite
    user.save(err => {
      if(err) return res.json({success: false, error: err})

      return res.json(user)
    })
  }
  
  static async getAllUsers (req, res) {
    User.find((err, user) => {
      if (err) return res.json( {success: false, error: err} )

      return res.json(user)
    })
  }

  static async deleteUser (req, res) {
    let { id } = req.body

    User.findOneAndRemove({ _id: id }, err => {
      if (err) {
        res.json({success: false})
      } else {
        res.json({success: true})
      }
    })
  }

  static async setFavorite (req, res) {
    let { id, favorite } = req.body
    await User.updateOne({_id: id}, { $set: { favorite } } )
    res.json({status: 'ok'})
  }

  static async editUser (req, res) {
    let { id, favorite, firstName, lastName, numberPhone } = req.body
    await User.updateOne({_id: id}, { $set: { favorite, firstName, lastName, numberPhone } } )
    res.json({status: 'ok'})
  }
}

module.exports = Controller
