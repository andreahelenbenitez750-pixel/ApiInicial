using ApiInicial.DTOs;
using ApiInicial.Models;

public interface ICategoriaService
{
    Task<List<CategoriaResponseDto>> ObtenerTodasAsync();
    Task<CategoriaResponseDto> CrearCategoriaAsync(CategoriaRequestDto categoria);
    Task<CategoriaResponseDto> ActualizarCategoria(int id, CategoriaRequestDto categoria);
    Task<bool> EliminarAsync(int id);
    Task<CategoriaResponseDto> BuscarCategoriaPorIdAsync(int id);
}