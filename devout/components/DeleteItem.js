

//remove prayer
deleteItem = (id) => {
    this.setState( prevState => {
      return {
        prayers: prevState.prayers.filter(p => p.id !== id)
      };
    });
  }
