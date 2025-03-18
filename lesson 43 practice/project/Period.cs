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
    public partial class Period : Form
    {
        public Period()
        {
            InitializeComponent();
        }
        Login fl = new Login();

        private void button1_Click(object sender, EventArgs e)
        {
            fl.connection.Open();

            this.Hide();
            AddPeriod form_addperiod = new AddPeriod();
            form_addperiod.ShowDialog();

            //визначення номера запису для ключового поля
            OleDbCommand count = new OleDbCommand("Select COUNT(Id) From Period", fl.connection);
            int nomer = Convert.ToInt32(count.ExecuteScalar().ToString());
            nomer++;

            if (form_addperiod.DialogResult == DialogResult.OK)
            {
                //добавляємо в таблицю новий товар
                nomer++;
                OleDbCommand command = fl.connection.CreateCommand();
                command.CommandText = "INSERT INTO Period VALUES(" + nomer + ", '" + form_addperiod.textBox1.Text + "', '" +
                    form_addperiod.textBox2.Text + "', '" + form_addperiod.textBox3.Text + "')";
                command.ExecuteNonQuery();
                form_addperiod.Dispose();
                this.Show();
            }
            else
            {
                form_addperiod.Close();
                this.Show();
            }
            fl.connection.Close();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            fl.connection.Open();

            this.Hide();
            AddPeriod form_addperiod = new AddPeriod();
            form_addperiod.button1.Text = "Редагувати";
            form_addperiod.Text = "Редагувати товар";
            form_addperiod.textBox1.Text = dataGridView1.CurrentRow.Cells[0].Value.ToString();
            form_addperiod.textBox2.Text = dataGridView1.CurrentRow.Cells[1].Value.ToString();
            form_addperiod.textBox3.Text = dataGridView1.CurrentRow.Cells[2].Value.ToString();
            form_addperiod.ShowDialog();

            if (form_addperiod.DialogResult == DialogResult.OK)
            {
                //редагуємо вибраний товар
                OleDbCommand command = fl.connection.CreateCommand();
                command.CommandText = "UPDATE Period SET Name='" + form_addperiod.textBox1.Text + "', Start='" +
                    form_addperiod.textBox2.Text + "', Finish='" + form_addperiod.textBox3.Text + "' Where Name='" +
                    dataGridView1.CurrentCell.Value + "'";
                command.ExecuteNonQuery();
                form_addperiod.Close();
                this.Show();
            }
            else
            {
                form_addperiod.Close();
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
                command.CommandText = "DELETE FROM Period Where Name='" + dataGridView1.CurrentCell.Value + "'";
                command.ExecuteNonQuery();
                MessageBox.Show("Запис видалено", "Повідомлення", MessageBoxButtons.OK, MessageBoxIcon.Information);
            }
            fl.connection.Close();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            fl.connection.Open();
            OleDbCommand command = new OleDbCommand("Select Name, Start, Finish From Period", fl.connection);

            OleDbDataReader reader = command.ExecuteReader();
            dataGridView1.Rows.Clear();
            if (reader.HasRows) //ящко є ще дані
            {
                while (reader.Read())
                {
                    dataGridView1.Rows.Add(reader["Name"], reader["Start"], reader["Finish"]);
                }
            }
            fl.connection.Close();
        }

        private void button5_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
