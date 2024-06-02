function checkPermission(role, isAdminAction, isNotAdminAction) {
  if (role === "ADMIN") isAdminAction();
  else isNotAdminAction();
}

function isAdminAction() {
 alert("ACCESS GRANTED");
//   console.log("ACCESS GRANTED");
}

function isNotAdminAction() {
  alert("ACCESS DENIED");
//   console.log("ACCESS DENIED");
}

checkPermission("ADMIN", isAdminAction, isNotAdminAction);
checkPermission("USER", isAdminAction, isNotAdminAction);