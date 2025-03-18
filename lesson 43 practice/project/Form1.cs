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
    public partial class Login : Form
    {
        public OleDbConnection connection = new OleDbConnection("Provider=Microsoft.Jet.OLEDB.4.0;  Data Source=C:\\Users\\Artem\\Desktop\\project\\project\\bin\\Debug\\Database-2.mdb;");
        public Login()
        {
            InitializeComponent();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Hide();
            Register form_register = new Register();
            form_register.ShowDialog();
            this.Show();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            try
            {
                string command = "Select * From Users Where login='" + textBox1.Text + "' AND password='" + textBox2.Text + "'";
                OleDbCommand cmd = new OleDbCommand(command, connection);

                connection.Open();

                if (cmd.ExecuteScalar() != null)
                {
                    this.Hide();
                    MainForm fm = new MainForm();
                    fm.ShowDialog();
                }
                else
                {
                    MessageBox.Show("Неправильний логін або пароль. Повторіть введення", "Попередження");
                    textBox1.Clear();
                    textBox2.Clear();
                }

            }
            finally
            {
                connection.Close();
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            Application.Exit();
        }
    }
}
