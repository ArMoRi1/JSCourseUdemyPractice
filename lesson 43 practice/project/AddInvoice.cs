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
    public partial class AddInvoice : Form
    {
        public AddInvoice()
        {
            InitializeComponent();
        }

        private void label12_Click(object sender, EventArgs e)
        {

        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void AddInvoice_Load(object sender, EventArgs e)
        {
            // TODO: This line of code loads data into the '_Database_2DataSet.Goods' table. You can move, or remove it, as needed.
            this.goodsTableAdapter.Fill(this._Database_2DataSet.Goods);

        }

        private void dataGridView1_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {

        }

        private void comboBox1_Click(object sender, EventArgs e)
        {
            //відкриття підключення до бд            
            Login fl = new Login();
            fl.connection.Open();
            OleDbCommand command = new OleDbCommand("Select NameCustomers From Customers", fl.connection);
            OleDbDataReader reader = command.ExecuteReader();
            comboBox1.Items.Clear();
            while (reader.Read())
            {
                comboBox1.Items.Add(reader["NameCustomers"]);
            }
        }

        private void comboBox2_Click(object sender, EventArgs e)
        {
            //відкриття підключення до бд            
            Login fl = new Login();
            fl.connection.Open();
            OleDbCommand command = new OleDbCommand("Select NameSuppliers From Suppliers", fl.connection);
            OleDbDataReader reader = command.ExecuteReader();
            comboBox2.Items.Clear();
            while (reader.Read())
            {
                comboBox2.Items.Add(reader["NameSuppliers"]);
            }
        }

        private void button4_Click(object sender, EventArgs e)
        {
            string s = Convert.ToString(dataGridView1.CurrentRow.Cells[1].Value);

            //відкриття підключення до бд            
            Login fl = new Login();
            fl.connection.Open();

            OleDbCommand command1 = new OleDbCommand("Select Units From Goods Where NameGoods='" + s + "'", fl.connection);
            OleDbCommand command2 = new OleDbCommand("Select Price From Goods Where NameGoods='" + s + "'", fl.connection);
            string s1 = command1.ExecuteScalar().ToString();
            string s2 = command2.ExecuteScalar().ToString();

            dataGridView1.CurrentRow.Cells[2].Value = s1;
            dataGridView1.CurrentRow.Cells[4].Value = s2;
            string cellPrice = dataGridView1.CurrentRow.Cells[3].Value.ToString();
            dataGridView1.CurrentRow.Cells[5].Value = int.Parse(s2) * double.Parse(cellPrice);
        }

        private void button5_Click(object sender, EventArgs e)
        {
            int index = dataGridView1.CurrentCell.RowIndex;
            dataGridView1.Rows.RemoveAt(index);
        }

        private void button1_Click(object sender, EventArgs e)
        {
            double s = 0;
            for (int i = 0; i < dataGridView1.Rows.Count; i++)
            {
                s += Convert.ToDouble(dataGridView1.Rows[i].Cells[5].Value);
            }
            textBox5.Text = s.ToString();
            double a = s * 0.2;
            textBox6.Text = a.ToString();
            double b = s + a;
            textBox7.Text = b.ToString();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            // відкриття підключення до бд
            Login fl = new Login();
            fl.connection.Open();

            //визначення номера запису для ключового поля
            OleDbCommand count = new OleDbCommand("Select COUNT(IdInvoice) From Invoice", fl.connection);
            int nomer = Convert.ToInt32(count.ExecuteScalar().ToString());
            nomer++;
            OleDbCommand command = fl.connection.CreateCommand();
            command.CommandText = "INSERT INTO Invoice(IdInvoice, DateInvoice, Whom, FromWhom, ThroughtWhom, DovirSeria, " +
                "DovirNomer, DovirDate, Basis, Goods, Quantity) " +
                "Select @nomer, @data, IdCustomers, IdSuppliers, @whom, @seria, @dnomer, @ddate, @basis, IdGoods, @quantity " +
                "From Customers, Suppliers, Goods Where NameCustomers=@nc And NameSuppliers=@ns And NameGoods=@ng";
            command.Parameters.AddWithValue("@nomer", SqlDbType.Int);
            command.Parameters["@nomer"].Value = nomer;
            command.Parameters.AddWithValue("@data", dateTimePicker1.Text);
            command.Parameters.AddWithValue("@whom", textBox2.Text);
            command.Parameters.AddWithValue("@seria", textBox3.Text);
            command.Parameters.AddWithValue("@dnomer", textBox4.Text);
            command.Parameters.AddWithValue("@ddate", dateTimePicker2.Text);
            command.Parameters.AddWithValue("@basis", richTextBox1.Text);
            command.Parameters.AddWithValue("@nc", comboBox1.Text);
            command.Parameters.AddWithValue("@ns", comboBox2.Text);
            command.Parameters.AddWithValue("@ng", dataGridView1.CurrentRow.Cells[1].Value);
            command.Parameters.AddWithValue("@quantity", dataGridView1.CurrentRow.Cells[5].Value);
            nomer++;
            command.ExecuteNonQuery();
        }
    }
}
