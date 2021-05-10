class NotesStore{
  constructor () {
    this.notes = [];
    this.validStates = ['completed', 'active', 'others']
  } 

  addNote(estado, nome){
    console.log('passou ADDNOTES');
    if (typeof nome === "undefined")
      throw 'Name cannot be empty'
    
    this.isValid(estado)
    var nota = {
      state: estado,
      name: nome
    }
    this.notes.push(nota)
    return
  }

  getNotes(estado){
    console.log('\n passou GETNOTES');
    this.isValid(estado);

    var res = this.notes.filter( data => data.state === estado)

    return res
  }

  isValid(estado){
    if (!this.validStates.includes(estado))
      throw `Invalid state ${estado}`
  }

  getAllNotes(){
    return this.notes;
  }
}

function main() {
  try {
    let teste = new NotesStore();
    teste.addNote('active', 'DrinkTea');
    teste.addNote('active', 'DrinkCoffe');
    teste.addNote('completed', 'Study');
    var x = teste.getNotes('active')
    console.log(x.values);

    // console.log(teste.getAllNotes());
    // console.log(`${teste.getNotes('active').join(',')}`); 
    // console.log(`${teste.getNotes('completed').join(',')}`); 
    // teste.getNotes('foo')
    
  } catch (error) {
    console.log(error);
  }
}

main()