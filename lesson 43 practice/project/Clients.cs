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
    public partial class Clients : Form
    {
        public Clients()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            //відкриття підключення до бд            
            Login fl = new Login();
            fl.connection.Open();

            AddCustomers form_addсustomers = new AddCustomers();
            this.Hide();
            form_addсustomers.ShowDialog();

            //визначення номера запису для ключового поля
            OleDbCommand count = new OleDbCommand("Select COUNT(IdCustomers) From Customers", fl.connection);
            int nomer = Convert.ToInt32(count.ExecuteScalar().ToString());
            nomer++;

            if (form_addсustomers.DialogResult == DialogResult.OK)
            {
                //добавляємо в таблицю новий товар
                nomer++;
                OleDbCommand command = fl.connection.CreateCommand();
                command.CommandText = "INSERT INTO Customers VALUES(" + nomer + ", '" + form_addсustomers.textBox1.Text + "', '" +
                    form_addсustomers.textBox2.Text + "', '" + form_addсustomers.textBox3.Text + "')";
                command.ExecuteNonQuery();
                form_addсustomers.Close();
                this.Show();
            }
            else
            {
                form_addсustomers.Close();
                this.Show();
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            //відкриття підключення до бд            
            Login fl = new Login();
            fl.connection.Open();

            AddCustomers form_addсustomers = new AddCustomers();
            this.Hide();
            form_addсustomers.button1.Text = "Редагувати";
            form_addсustomers.Text = "Редагувати відомості про клієнта";
            form_addсustomers.textBox1.Text = dataGridView1.CurrentRow.Cells[0].Value.ToString();
            form_addсustomers.textBox2.Text = dataGridView1.CurrentRow.Cells[1].Value.ToString();
            form_addсustomers.textBox3.Text = dataGridView1.CurrentRow.Cells[2].Value.ToString();
            form_addсustomers.ShowDialog();

            if (form_addсustomers.DialogResult == DialogResult.OK)
            {
                //редагуємо вибраний товар
                OleDbCommand command = fl.connection.CreateCommand();
                command.CommandText = "UPDATE Customers SET NameCustomers='" + form_addсustomers.textBox1.Text + "', AdressCustomers='" +
                    form_addсustomers.textBox2.Text + "', TelephoneCustomers='" + form_addсustomers.textBox3.Text + "' Where NameCustomers='" +
                    dataGridView1.CurrentCell.Value + "'";
                command.ExecuteNonQuery();
                form_addсustomers.Close();
                this.Show();
            }
            else
            {
                form_addсustomers.Close();
                this.Show();
            }
        }

        private void button3_Click(object sender, EventArgs e)
        {
            //відкриття підключення до бд            
            Login fl = new Login();
            fl.connection.Open();

            DialogResult result = MessageBox.Show("Видалити вибраний запис?", "Попередження", MessageBoxButtons.OKCancel);

            if (result == DialogResult.OK)
            {
                OleDbCommand command = fl.connection.CreateCommand();
                command.CommandText = "DELETE FROM Customers Where NameCustomers='" + dataGridView1.CurrentCell.Value + "'";
                command.ExecuteNonQuery();
                MessageBox.Show("Запис видалено", "Повідомлення", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
        }

        private void button4_Click(object sender, EventArgs e)
        {
            Login fl = new Login();
            fl.connection.Open();
            OleDbCommand command = new OleDbCommand("Select NameCustomers, AdressCustomers, TelephoneCustomers From Customers", fl.connection);

            OleDbDataReader reader = command.ExecuteReader();
            dataGridView1.Rows.Clear();
            if (reader.HasRows) //ящко є ще дані
            {
                while (reader.Read())
                {
                    dataGridView1.Rows.Add(reader["NameCustomers"], reader["AdressCustomers"], reader["TelephoneCustomers"]);
                }
            }
        }

        private void button5_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void Clients_Load(object sender, EventArgs e)
        {
            //відкриття підключення до бд            
            Login fl = new Login();
            fl.connection.Open();

            OleDbCommand command = new OleDbCommand("Select NameCustomers, AdressCustomers, TelephoneCustomers From Customers", fl.connection);

            OleDbDataReader reader = command.ExecuteReader();
            if (reader.HasRows) //ящко є ще дані
            {
                while (reader.Read())
                {
                    dataGridView1.Rows.Add(reader["NameCustomers"], reader["AdressCustomers"], reader["TelephoneCustomers"]);
                }
            }
        }
    }
}
