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
    public partial class Suppliers : Form
    {
        public Suppliers()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            //відкриття підключення до бд            
            Login fl = new Login();
            fl.connection.Open();

            AddSuppliers form_addsuppliers = new AddSuppliers();
            this.Hide();
            form_addsuppliers.ShowDialog();

            //визначення номера запису для ключового поля
            OleDbCommand count = new OleDbCommand("Select COUNT(IdSuppliers) From Suppliers", fl.connection);
            int nomer = Convert.ToInt32(count.ExecuteScalar().ToString());
            nomer++;

            if (form_addsuppliers.DialogResult == DialogResult.OK)
            {
                //добавляємо в таблицю новий товар
                nomer++;
                OleDbCommand command = fl.connection.CreateCommand();
                command.CommandText = "INSERT INTO Suppliers VALUES(" + nomer + ", '" + form_addsuppliers.textBox1.Text + "', '" +
                    form_addsuppliers.textBox2.Text + "', '" + form_addsuppliers.textBox3.Text + "')";
                command.ExecuteNonQuery();
                form_addsuppliers.Close();
                this.Show();
            }
            else
            {
                form_addsuppliers.Close();
                this.Show();
            }
        }

        private void button2_Click(object sender, EventArgs e)
        {
            //відкриття підключення до бд            
            Login fl = new Login();
            fl.connection.Open();

            AddSuppliers form_addsuppliers = new AddSuppliers();
            this.Hide();
            form_addsuppliers.button1.Text = "Редагувати";
            form_addsuppliers.Text = "Редагувати відомості про клієнта";
            form_addsuppliers.textBox1.Text = dataGridView1.CurrentRow.Cells[0].Value.ToString();
            form_addsuppliers.textBox2.Text = dataGridView1.CurrentRow.Cells[1].Value.ToString();
            form_addsuppliers.textBox3.Text = dataGridView1.CurrentRow.Cells[2].Value.ToString();
            form_addsuppliers.ShowDialog();

            if (form_addsuppliers.DialogResult == DialogResult.OK)
            {
                //редагуємо вибраний товар
                OleDbCommand command = fl.connection.CreateCommand();
                command.CommandText = "UPDATE Suppliers SET NameSuppliers='" + form_addsuppliers.textBox1.Text + "', AdressSuppliers='" +
                    form_addsuppliers.textBox2.Text + "', TelephoneSuppliers='" + form_addsuppliers.textBox3.Text + "' Where NameSuppliers='" +
                    dataGridView1.CurrentCell.Value + "'";
                command.ExecuteNonQuery();
                form_addsuppliers.Close();
                this.Show();
            }
            else
            {
                form_addsuppliers.Close();
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
                command.CommandText = "DELETE FROM Suppliers Where NameSuppliers='" + dataGridView1.CurrentCell.Value + "'";
                command.ExecuteNonQuery();
                MessageBox.Show("Запис видалено", "Повідомлення", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
        }

        private void button4_Click(object sender, EventArgs e)
        {
            Login fl = new Login();
            fl.connection.Open();
            OleDbCommand command = new OleDbCommand("Select NameSuppliers, AdressSuppliers, TelephoneSuppliers From Suppliers", fl.connection);

            OleDbDataReader reader = command.ExecuteReader();
            dataGridView1.Rows.Clear();
            if (reader.HasRows) //ящко є ще дані
            {
                while (reader.Read())
                {
                    dataGridView1.Rows.Add(reader["NameSuppliers"], reader["AdressSuppliers"], reader["TelephoneSuppliers"]);
                }
            }
        }

        private void button5_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void Suppliers_Load(object sender, EventArgs e)
        {
            //відкриття підключення до бд            
            Login fl = new Login();
            fl.connection.Open();

            OleDbCommand command = new OleDbCommand("Select NameSuppliers, AdressSuppliers, TelephoneSuppliers From Suppliers", fl.connection);

            OleDbDataReader reader = command.ExecuteReader();
            if (reader.HasRows) //ящко є ще дані
            {
                while (reader.Read())
                {
                    dataGridView1.Rows.Add(reader["NameSuppliers"], reader["AdressSuppliers"], reader["TelephoneSuppliers"]);
                }
            }
        }
    }
}
