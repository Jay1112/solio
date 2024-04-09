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
      {
        id: 4,
        platform : 'Instagram',
        link: "https://www.instagram.com/jay1112",
      },
      {
        id: 5,
        platform : 'Facebook',
        link: "https://www.facebook.com/jayfb",
      },
      {
        id: 6,
        platform : 'LinkedIn',
        link: "https://www.linkedin.com/jaylink11",
      },
      {
        id: 7,
        platform : 'Instagram',
        link: "https://www.instagram.com/jay1112",
      },
      {
        id: 8,
        platform : 'Facebook',
        link: "https://www.facebook.com/jayfb",
      },
      {
        id: 9,
        platform : 'LinkedIn',
        link: "https://www.linkedin.com/jaylink11",
      },
      {
        id: 10,
        platform : 'Instagram',
        link: "https://www.instagram.com/jay1112",
      },
      {
        id: 11,
        platform : 'Facebook',
        link: "https://www.facebook.com/jayfb",
      },
      {
        id: 12,
        platform : 'LinkedIn',
        link: "https://www.linkedin.com/jaylink11",
      },
      {
        id: 13,
        platform : 'Instagram',
        link: "https://www.instagram.com/jay1112",
      },
      {
        id: 14,
        platform : 'Facebook',
        link: "https://www.facebook.com/jayfb",
      },
      {
        id: 15,
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