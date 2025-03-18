using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Data.OleDb;

namespace project
{
    public partial class Register : Form
    {
        public OleDbConnection connection = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;  Data Source=C:\\Users\\Artem\\Desktop\\project\\project\\bin\\Debug\\Database-2.mdb;");
        public Register()
        {
            InitializeComponent();
        }

        private void Register_Load(object sender, EventArgs e)
        {

        }

        private void button3_Click(object sender, EventArgs e)
        {
            //відкриття підключення до бд            
            Login fl = new Login();
            
            fl.connection.Open();
            //визначення номера запису для ключового поля
            OleDbCommand count = new OleDbCommand("Select COUNT(id) From Users", fl.connection);
            int nomer = Convert.ToInt32(count.ExecuteScalar().ToString());
            nomer++;

            if (textBox2.Text == textBox3.Text)//перевіряємо на співпадання паролі
            {
                //перевіряємо чи існуємо в бд введений логін
                string com = "Select * From Users WHERE login='" + textBox1.Text + "'";
                OleDbCommand check = new OleDbCommand(com, fl.connection);

                if (check.ExecuteScalar() == null && textBox1.Text != "" && textBox2.Text != "" && textBox3.Text != "")
                {
                    //вводимо в бд нового користувача
                    OleDbCommand command = fl.connection.CreateCommand();
                    command.CommandText = "INSERT INTO Users VALUES (" + nomer + ",'" + textBox1.Text + "','" + textBox2.Text + "')";
                    command.ExecuteNonQuery();
                    fl.connection.Close();
                    this.Close();
                }
                else
                {
                    MessageBox.Show("Користувач з таким логіном вже існує. Повторіть введення", "Попередження");
                    textBox1.Clear();
                    textBox2.Clear();
                    textBox3.Clear();
                }
            }
            else
            {
                MessageBox.Show("Паролі не співпадають. Повторіть введення", "Попередження");
                textBox2.Clear();
                textBox3.Clear();
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
