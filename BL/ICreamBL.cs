using DAL.Models;
using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BL
{
    public interface ICreamBL
    {
        public IList<CreamDTO> GetAllCreams();

        public CreamDTO GetCreamById(int id);


    }
}
