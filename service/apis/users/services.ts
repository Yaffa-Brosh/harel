import { UserDoc } from '../../models/users'
const fs = require('fs')
const fsPromises = require('fs').promises
const xmlParser = require('xml2json')
const formatXml = require('xml-formatter')
let xmlObj: any

export const getAll = async () => {
  return fsPromises
    .readFile('./common/data.xml')
    .then(function (result: string) {
      xmlObj = xmlParser.toJson(result, { reversible: true, object: true })
      const usersData = xmlObj['users']['user'].map((u: { [x: string]: any }) => {
        return { _id: u['id'], firstName: u['firstName'].$t, lastName: u['lastName'].$t, date: u['date'].$t, phone: u['phone'].$t }
      })
      return usersData
    })
    .catch(function (error: any) {
      console.log(error)
    })
}

export const checkUser = async (email: string) => {
  return fsPromises
    .readFile('./common/data.xml')
    .then(function (result: string) {
      xmlObj = xmlParser.toJson(result, { reversible: true, object: true })
      const usersArray = xmlObj['users']['user']
      for (let i = 0; i < usersArray.length; i++) {
        if (xmlObj['users']['user'][i].email.$t === email) {
          return true
        }
      }
    })
    .catch(function (error: any) {
      console.log(error)
    })
}

export const byId = async (id: string) => {
  return fsPromises
    .readFile('./common/data.xml')
    .then(function (result: string) {
      xmlObj = xmlParser.toJson(result, { reversible: true, object: true })
      const usersArray = xmlObj['users']['user']
      for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].id === id) {
          const user = xmlObj['users']['user'][i]
          return { _id: user['id'], firstName: user['firstName'].$t, lastName: user['lastName'].$t, date: user['date'].$t, phone: user['phone'].$t }
        }
      }
    })
    .catch(function (error: any) {
      console.log(error)
    })
}

export const update = async (id: string, toUpdate: UserDoc) => {
  return fsPromises
    .readFile('./common/data.xml')
    .then(function (result: string) {
      xmlObj = xmlParser.toJson(result, { reversible: true, object: true })
      let editedUser: any
      const usersArray = xmlObj['users']['user']
      const { firstName, lastName, date, phone } = toUpdate
      for (let i = 0; i < usersArray.length; i++) {
        if (usersArray[i].id === id) {
          xmlObj['users']['user'][i].firstName.$t = firstName
          xmlObj['users']['user'][i].lastName.$t = lastName
          xmlObj['users']['user'][i].date.$t = date
          xmlObj['users']['user'][i].phone.$t = phone
          editedUser = xmlObj['users']['user'][i]
          break
        }
      }
      const stringifiedXmlObj = JSON.stringify(xmlObj)
      const finalXml = xmlParser.toXml(stringifiedXmlObj)

      fs.writeFile('./common/data.xml', formatXml(finalXml, { collapseContent: true }), function (err: any, result: any) {
        if (err) {
          console.log('err')
        } else {
          console.log('Xml file successfully updated.')
          return editedUser
        }
      })
    })
    .catch(function (error: any) {
      console.log(error)
    })
}
