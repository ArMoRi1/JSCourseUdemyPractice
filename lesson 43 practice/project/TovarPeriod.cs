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
using System.Windows.Forms.DataVisualization.Charting;

namespace project
{
    public partial class TovarPeriod : Form
    {
        public TovarPeriod()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            //відкриття підключення до бд            
            Login fl = new Login();
            fl.connection.Open();

            //видаляємо всі точки діаграми, які містились до цього
            chart1.Series[0].Points.Clear();
            // Задаємо тип діаграми
            chart1.Series["Series1"].ChartType = SeriesChartType.Column;
            // Задаємо колір ліній
            chart1.Series["Series1"].Color = System.Drawing.Color.Red;
            // Легенду на графіку відображаємо
            chart1.Series["Series1"].IsVisibleInLegend = true;
            //chart1.Series["Series1"].LegendText = "Продані товари за період";
            //відображення значень над стовпикачи
            chart1.Series["Series1"].IsValueShownAsLabel = true;

            OleDbCommand command = new OleDbCommand("Select NameGoods, Price*Quantity As Suma From Invoice, " +
                "Goods Where IdGoods=Invoice.Goods And DateInvoice>='" + dateTimePicker1.Value + "' And DateInvoice<='"
                + dateTimePicker2.Value + "'", fl.connection);

            OleDbDataReader reader = command.ExecuteReader();
            if (reader.HasRows) //ящко є ще дані
            {
                while (reader.Read())
                {
                    chart1.Series[0].Points.AddXY(reader["NameGoods"], reader["Suma"]);
                }
            }
        }
    }
}
