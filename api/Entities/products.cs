using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Entities
{
    public class product
    {
        public int id { get; set; }
        public string name { get; set; }
        public int price { get; set; }
        public int amountInStore { get; set; }
    }
}