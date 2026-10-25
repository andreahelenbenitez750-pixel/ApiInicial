using System.ComponentModel.DataAnnotations;

namespace ApiInicial.DTOs;

public class CategoriaRequestDto
{
    [Required]
    [StringLength(20, ErrorMessage = "La propiedad no tiene la longitud correcta")]
    public string Nombre { get; set; } = string.Empty;

    [Required]
    [StringLength(100, ErrorMessage = "La descripción no tiene la longitud correcta")]
    public string Descripcion { get; set; } = string.Empty;
}