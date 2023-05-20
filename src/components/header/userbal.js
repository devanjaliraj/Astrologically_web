import axiosConfig from "../../axiosConfig";

export const FetchUserBalance = async () => {
  let user_id = JSON.parse(localStorage.getItem("user_id"));

  axiosConfig
    .get(`/user/viewoneuser/${user_id}`)
    .then((response) => {
      console.log(response.data.data.amount);
      const data = response.data.data.amouont;
      return data;
    })
    .catch((error) => {
      console.log(error);
    });
};
export default FetchUserBalance;

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
//     Fetchuserdetail
//   )(IconGroup);
