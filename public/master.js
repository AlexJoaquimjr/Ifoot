

var y=0;
var cadastros=[];

function Logout(){
  $(".FichaMedica").css("display","none");
  $(".login").css("display","block");
  $("#usernameField").val("");
  $("#passwordField").val("");
  $("#imagemPUC").css("display","block");
  location.reload();
}

function sing_up(){

  $(".criarctn").css("display","block");
  $(".criarsome").css("display","none");

}

function Voltar() {
  $(".criarctn").css("display","none");
  $(".criarsome").css("display","block");
  $(".erro").css("display", "none");
  $("#newpasswordField").val("");
  $("#newusernameField").val("");
}

function Finalizar(){

  $(".criarctn").css("display","none");
  $(".criarsome").css("display","block");
  var nome=$("#newusernameField").val();
  var senha=$("#newpasswordField").val();
  if(nome == "" || senha == "") { //faz com que usuário e senha vazios não sejam válidos no cadastro

    var nome=$("#newusernameField").val();
    var senha=$("#newpasswordField").val();

    $(".erro").css("display", "block");
    $(".criarsome").css("display","none");
    $(".criarctn").css("display","block");
  }
  else{
    $(".erro").css("display", "none");
    $("#newpasswordField").val("");
    $("#newusernameField").val("");
  }

  var usuario= new Object();
  usuario.name=nome;
  usuario.senha=senha;

  cadastros[y]= usuario;
  y++;
}

var userAdm = "admin";
var pwAdm = "admin";

function sign_in () {
  var aux=0;
  var user=$("#usernameField").val();
  var pw=$("#passwordField").val();
  for(var u=0;u<y;u++){

    if(user==cadastros[u].name && pw==cadastros[u].senha){
      $(".FichaMedica").css("display","block");
      $(".FichaMedica").fadeTo("slow", 1);
      $(".login").css("display","none");
   
      return(aux=1);
    }
  }
    if (user == userAdm && pw == pwAdm) {
      $(".FichaMedica").css("display","block");
      $(".FichaMedica").fadeTo("slow", 1);
      $(".login").css("display","none");
      $("#imagemPUC").css("display","none");
      return(aux=1);
    }

    if(aux==0){
      alert("Usuário ou senha incorretos.\nInsira os credenciais novamente.");
      $("#usernameField").val("");
      $("#passwordField").val("");
    }
}
