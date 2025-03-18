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
    public partial class Goods : Form
    {
        public Goods()
        {
            InitializeComponent();
        }
        Login fl = new Login();
        private void button1_Click(object sender, EventArgs e)
        {
            fl.connection.Open();

            this.Hide();
            AddGoods form_addgoods = new AddGoods();
            form_addgoods.ShowDialog();

            //визначення номера запису для ключового поля
            OleDbCommand count = new OleDbCommand("Select COUNT(IdGoods) From Goods", fl.connection);
            int nomer = Convert.ToInt32(count.ExecuteScalar().ToString());
            nomer++;

            if (form_addgoods.DialogResult == DialogResult.OK)
            {
                //добавляємо в таблицю новий товар
                nomer++;
                OleDbCommand command = fl.connection.CreateCommand();
                command.CommandText = "INSERT INTO Goods VALUES(" + nomer + ", '" + form_addgoods.textBox1.Text + "', '" +
                    form_addgoods.textBox2.Text + "', " + form_addgoods.textBox3.Text + ")";
                command.ExecuteNonQuery();
                form_addgoods.Dispose();
                this.Show();
            }
            else
            {
                form_addgoods.Close();
                this.Show();
            }
            fl.connection.Close();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            fl.connection.Open();

            this.Hide();
            AddGoods form_addgoods = new AddGoods();
            form_addgoods.button1.Text = "Редагувати";
            form_addgoods.Text = "Редагувати товар";
            form_addgoods.textBox1.Text = dataGridView1.CurrentRow.Cells[0].Value.ToString();
            form_addgoods.textBox2.Text = dataGridView1.CurrentRow.Cells[1].Value.ToString();
            form_addgoods.textBox3.Text = dataGridView1.CurrentRow.Cells[2].Value.ToString();
            form_addgoods.ShowDialog();

            if (form_addgoods.DialogResult == DialogResult.OK)
            {
                //редагуємо вибраний товар
                OleDbCommand command = fl.connection.CreateCommand();
                command.CommandText = "UPDATE Goods SET NameGoods='" + form_addgoods.textBox1.Text + "', Units='" +
                    form_addgoods.textBox2.Text + "', Price=" + form_addgoods.textBox3.Text + " Where NameGoods='" +
                    dataGridView1.CurrentCell.Value + "'";
                command.ExecuteNonQuery();
                form_addgoods.Close();
                this.Show();
            }
            else
            {
                form_addgoods.Close();
                this.Show();
            }
            fl.connection.Close();
        }

        private void button3_Click(object sender, EventArgs e)
        {
            fl.connection.Open();

            DialogResult result = MessageBox.Show("Видалити вибраний запис?", "Попередження", MessageBoxButtons.OKCancel);

            if (result == DialogResult.OK)
            {
                OleDbCommand command = fl.connection.CreateCommand();
                command.CommandText = "DELETE FROM Goods Where NameGoods='" + dataGridView1.CurrentCell.Value + "'";
                command.ExecuteNonQuery();
                MessageBox.Show("Запис видалено", "Повідомлення", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            fl.connection.Close();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            fl.connection.Open();
            OleDbCommand command = new OleDbCommand("Select NameGoods, Units, Price From Goods", fl.connection);

            OleDbDataReader reader = command.ExecuteReader();
            dataGridView1.Rows.Clear();
            if (reader.HasRows) //ящко є ще дані
            {
                while (reader.Read())
                {
                    dataGridView1.Rows.Add(reader["NameGoods"], reader["Units"], reader["Price"]);
                }
            }
            fl.connection.Close();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void Goods_Load(object sender, EventArgs e)
        {
            fl.connection.Open();

            OleDbCommand command = new OleDbCommand("Select NameGoods, Units, Price From Goods", fl.connection);

            OleDbDataReader reader = command.ExecuteReader();
            if (reader.HasRows) //ящко є ще дані
            {
                while (reader.Read())
                {
                    dataGridView1.Rows.Add(reader["NameGoods"], reader["Units"], reader["Price"]);
                }
            }
            fl.connection.Close();
        }
    }
}
