const LinkData = {
    list: [
      {
        id : 1,
        title: 'Test Profile',
        description: 'testing body',
        iconImage : null,
        link: 'https://google.com',
        order_id : 1
      },
      {
        id : 2,
        title: 'Test Profile',
        description: 'testing body',
        iconImage : null,
        link: 'https://google.com',
        order_id : 2
      },
      {
        id : 3,
        title: 'Test Profile',
        description: 'testing body',
        iconImage : null,
        link: 'https://google.com',
        order_id : 3
      },
      {
        id : 4,
        title: 'Test Profile',
        description: 'testing body',
        iconImage : null,
        link: 'https://google.com',
        order_id : 4
      },
      {
        id : 5,
        title: 'Test Profile',
        description: 'testing body',
        iconImage : null,
        link: 'https://google.com',
        order_id : 5
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
  
  export default LinkData;