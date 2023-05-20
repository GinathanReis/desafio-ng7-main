namespace desafio_ng7_main.Entity
{
    public class Cliente
    {
        public string Gender { get; set; }
        public NomeCliente Name { get; set; }
        public EnderecoCliente Location { get; set; }
        public string Email { get; set; }
        public LoginCliente Login { get; set; }
        public DateTime Dob { get; set; }
        public DateTime Registered { get; set; }
        public string Phone { get; set; }
        public string Cell { get; set; }
        public IdCliente Id { get; set; }
        public FotoCliente Picture { get; set; }
        public string Nat { get; set; }
    }
}
