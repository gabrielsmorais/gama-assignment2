class Database {

  constructor(firebaseURL, basePath, listeners) {

    this._data = [];
    this._basePath = basePath;
    this._firebaseURL = firebaseURL;
    // this.sync(basePath);

    if(typeof listeners.onAppend === 'function'){
      firebase.database().ref(this._basePath).on('child_added', listeners.onAppend);
    }
    if(typeof listeners.onChange === 'function'){
      firebase.database().ref(this._basePath).on('child_changed', listeners.onChange);
    }
    if(typeof listeners.onRemove === 'function'){
      firebase.database().ref(this._basePath).on('child_removed', listeners.onRemove);
    }

  }

  // getters
  get data (){
    return this._data;
  }

  set data (data){
    this._data = data;
  }

}