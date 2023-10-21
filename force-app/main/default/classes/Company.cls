public class Company {
	public String companyName;
    public String ceo;
    public Integer employeeCount;
    public Long revenue;
    
    //List of all customer
    private List<Client> customers = new List<Client>();
    
    //add new customer
    public void addNewCustomer(String clientName, String website, String email, Long phone){
        Client cliente = new Client(clientName, website, email, phone);
    	customers.add(cliente);
        
    }
    
    public void getAllCustomers(){
        for(Client cus: customers){
            System.debug('Este es el cliente: '+ cus.clientName + ' con WebSite = ' + cus.website + ' con Email ' + cus.email + ' con telefono '+ cus.phone);
        }
        
    }
    
    private class Client{
        public String clientName;
        public String website;
        public String email;
        public Long phone;
        
        public Client(String clientName, String website, String email, Long phone){
            this.clientName = clientName;
            this.website = website;
            this.email = email;
            this.phone = phone;
        }
    }
}