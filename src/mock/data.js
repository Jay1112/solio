const List = {
    list: [
      {
        id: 1,
        platform : 'Instagram',
        link: "https://www.instagram.com/jay1112",
      },
      {
        id: 2,
        platform : 'Facebook',
        link: "https://www.facebook.com/jayfb",
      },
      {
        id: 3,
        platform : 'LinkedIn',
        link: "https://www.linkedin.com/jaylink11",
      },
    ],
    getList: function () {
      return (
        (localStorage.getItem("theList") &&
          JSON.parse(localStorage.getItem("theList"))) ||
        this.list
      );
    },
    saveList: (list) => {
      localStorage.setItem("theList", JSON.stringify(list));
    },
  };
  
  export default List;