import { extendObservable } from "mobx";
import uuid from "uuid";


class myStore {
  constructor() {
      extendObservable(this, {
          /* See previous listing */
          projects: [
            {
              id: uuid.v4(),
              title: 'Business Website',
              category: 'Web Design'
            }, {
              id: uuid.v4(),
              title: 'Social App',
              category: 'Mobile Development'
            }, {
              id: uuid.v4(),
              title: 'Ecommerce Shopping Cart',
              category: 'Web Development'
            }
          ],
          todos: [],
          position: 0,
        })
      }
    }

var store = window.store =  new myStore()
console.log(store)
export default store
