/**
 * TODO 1.
 * Buat array of object users (5 users).
 * Object memiliki property: name, age, major.
 * Note: Ubah var menggunakan JavaScript Modern.
 */
const users = [
  {
    name:'Hisyam',
    age: 20,
    major: 'Informatika',
  },
  {
    name:'Rifqi',
    age: 21,
    major: 'Informatika',
  },
  {
    name:'Irvan',
    age: 21,
    major: 'Informatika',
  },
  {
    name:'Farhan',
    age: 21,
    major: 'Informatika',
  },{
    name:'Zuhdi',
    age: 20,
    major: 'Informatika',
  }
];

/**
 * TODO 2
 * Buat function all: Menampilkan semua data user.
 * Hint: Gunakan for/for-of.
 * Note: Ubah function menggunakan arrow function.
 */
// function all() {}
const all = (Users) => {
  for(const user in users) {
    let i=0; i< 4; i++;
    return user[i];
  }
}
/**
 * TODO 3
 * Buat function store: Menambahkan user baru.
 * Hint: Gunakan method push.
 * Note: Ubah function menggunakan arrow function.
 */
// function store(user) {}
const store = (user) => {
  users.push(user);
  return users.name,users.age,users.major;
}

/**
 * TODO 4.
 * Buat function update: Mengedit data user.
 * Hint: re-assign array.
 * Note: Ubah function menggunakan arrow function.
 */
// function update(index, user) {}
const update = (index,user) => {
  users[index]=user;
  return user[index];
}

/**
 * TODO 5.
 * Buat function destroy: Menghapus data user.
 * Hint: Gunakan method splice.
 * Note: Ubah function menggunakan arrow function.
 */
// function destroy(index) {}
const destroy = (index) => {
  users.splice(index,1);
  return users.name,users.age,users.major;
}

/**
 * Function main.
 * Jangan edit atau hapus function main.
 * Function ini untuk testing task.
 */

const main = () => {
  /**
   * Test function index
   */
  console.log("# Get All Users");
  all();

  /**
   * Test function store
   */
  console.log("# Add New User: Sabiq");
  const newUser = {
    name: "Sabiq",
    age: 20,
    major: "Informatics",
  };
  store(newUser);

  /**
   * Test function update
   */
  console.log("# Edit User: Isfa");
  const editedIndex = 1;
  const editedUser = {
    name: "Isfhani Ghiyath",
    age: 23,
    major: "English",
  };
  update(editedIndex, editedUser);

  /**
   * Test function destroy
   */
  console.log("# Delete User: Nurul");
  const deletedIndex = 2;
  destroy(deletedIndex);
};

main();

/**
 * Jangan hapus exports.
 * Exports ini untuk tujuan testing.
 */
module.exports = { users, all, store, update, destroy };
