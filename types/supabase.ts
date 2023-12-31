export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      images: {
        Row: {
          created_at: string | null
          id: number
          image_url: string
          laptop_id: number
        }
        Insert: {
          created_at?: string | null
          id?: never
          image_url: string
          laptop_id: number
        }
        Update: {
          created_at?: string | null
          id?: never
          image_url?: string
          laptop_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "images_laptop_id_fkey"
            columns: ["laptop_id"]
            referencedRelation: "laptops"
            referencedColumns: ["id"]
          }
        ]
      }
      laptops: {
        Row: {
          brand: Database["public"]["Enums"]["brand"] | null
          cpu_is_intel: boolean | null
          cpu_model: Database["public"]["Enums"]["cpumodel"] | null
          cpu_num: Database["public"]["Enums"]["cpunum"] | null
          description: string | null
          exact_model: string | null
          face_id: boolean | null
          gpu: Database["public"]["Enums"]["gpu"] | null
          gpu_power: number | null
          id: number
          keyboard_type: Database["public"]["Enums"]["keyboardtype"] | null
          model: string | null
          new: boolean | null
          original_box: boolean | null
          portability: number | null
          price: number | null
          professionalism: number | null
          ram_size: Database["public"]["Enums"]["ramsize"] | null
          ram_type: Database["public"]["Enums"]["ramtype"] | null
          release_year: number | null
          screen_hz: Database["public"]["Enums"]["screenhz"] | null
          screen_inch: Database["public"]["Enums"]["screeninch"] | null
          screen_resolution:
            | Database["public"]["Enums"]["screenresolution"]
            | null
          storage_size: Database["public"]["Enums"]["storagesize"] | null
          storage_type: Database["public"]["Enums"]["storagetype"] | null
          visual_condition: number | null
          vram: Database["public"]["Enums"]["vram"] | null
          working_condition: number | null
        }
        Insert: {
          brand?: Database["public"]["Enums"]["brand"] | null
          cpu_is_intel?: boolean | null
          cpu_model?: Database["public"]["Enums"]["cpumodel"] | null
          cpu_num?: Database["public"]["Enums"]["cpunum"] | null
          description?: string | null
          exact_model?: string | null
          face_id?: boolean | null
          gpu?: Database["public"]["Enums"]["gpu"] | null
          gpu_power?: number | null
          id?: number
          keyboard_type?: Database["public"]["Enums"]["keyboardtype"] | null
          model?: string | null
          new?: boolean | null
          original_box?: boolean | null
          portability?: number | null
          price?: number | null
          professionalism?: number | null
          ram_size?: Database["public"]["Enums"]["ramsize"] | null
          ram_type?: Database["public"]["Enums"]["ramtype"] | null
          release_year?: number | null
          screen_hz?: Database["public"]["Enums"]["screenhz"] | null
          screen_inch?: Database["public"]["Enums"]["screeninch"] | null
          screen_resolution?:
            | Database["public"]["Enums"]["screenresolution"]
            | null
          storage_size?: Database["public"]["Enums"]["storagesize"] | null
          storage_type?: Database["public"]["Enums"]["storagetype"] | null
          visual_condition?: number | null
          vram?: Database["public"]["Enums"]["vram"] | null
          working_condition?: number | null
        }
        Update: {
          brand?: Database["public"]["Enums"]["brand"] | null
          cpu_is_intel?: boolean | null
          cpu_model?: Database["public"]["Enums"]["cpumodel"] | null
          cpu_num?: Database["public"]["Enums"]["cpunum"] | null
          description?: string | null
          exact_model?: string | null
          face_id?: boolean | null
          gpu?: Database["public"]["Enums"]["gpu"] | null
          gpu_power?: number | null
          id?: number
          keyboard_type?: Database["public"]["Enums"]["keyboardtype"] | null
          model?: string | null
          new?: boolean | null
          original_box?: boolean | null
          portability?: number | null
          price?: number | null
          professionalism?: number | null
          ram_size?: Database["public"]["Enums"]["ramsize"] | null
          ram_type?: Database["public"]["Enums"]["ramtype"] | null
          release_year?: number | null
          screen_hz?: Database["public"]["Enums"]["screenhz"] | null
          screen_inch?: Database["public"]["Enums"]["screeninch"] | null
          screen_resolution?:
            | Database["public"]["Enums"]["screenresolution"]
            | null
          storage_size?: Database["public"]["Enums"]["storagesize"] | null
          storage_type?: Database["public"]["Enums"]["storagetype"] | null
          visual_condition?: number | null
          vram?: Database["public"]["Enums"]["vram"] | null
          working_condition?: number | null
        }
        Relationships: []
      }
      user_favorites: {
        Row: {
          laptop_id: number
          user_email: string
        }
        Insert: {
          laptop_id: number
          user_email: string
        }
        Update: {
          laptop_id?: number
          user_email?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_favorites_laptop_id_fkey"
            columns: ["laptop_id"]
            referencedRelation: "laptops"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_favorites_user_email_fkey"
            columns: ["user_email"]
            referencedRelation: "users"
            referencedColumns: ["email"]
          }
        ]
      }
      users: {
        Row: {
          email: string | null
          id: string
          image: string | null
          name: string | null
        }
        Insert: {
          email?: string | null
          id: string
          image?: string | null
          name?: string | null
        }
        Update: {
          email?: string | null
          id?: string
          image?: string | null
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      additional: "faceId" | "fingerprint"
      brand:
        | "Lenovo"
        | "Acer"
        | "Asus"
        | "Gigabyte"
        | "Cyberpowerpc"
        | "HP"
        | "Dell"
      cpubrand: "intel" | "amd"
      cpumodel:
        | "11800h"
        | "12900h"
        | "9750h"
        | "10750h"
        | "6900Hs"
        | "6900Hx"
        | "5800h"
        | "5600h"
        | "5700h"
      cpunum: "3" | "5" | "7" | "9"
      gpu:
        | "RTX 3050"
        | "RTX 3050Ti"
        | "RTX 3060"
        | "RTX 3060Ti"
        | "RTX 3070"
        | "RTX 3070Ti"
        | "RTX 3080"
        | "RTX 3080Ti"
        | "RTX 2050"
        | "RTX 2050Ti"
        | "RTX 2060"
        | "RTX 2060Ti"
        | "RTX 2070"
        | "RTX 2070Ti"
        | "RTX 2080"
        | "RTX 2080Ti"
        | "GTX 1660"
        | "GTX 1660Ti"
        | "GTX 1650"
        | "GTX 1650Ti"
        | "Rx 6700s"
        | "Rx6800s"
        | "Rx6700M"
        | "Rx6800M"
      keyboardtype: "rgb" | "backlight"
      ramsize: "8" | "12" | "16" | "24" | "32" | "64"
      ramtype: "ddr4" | "ddr5"
      screenhz: "60" | "90" | "120" | "144" | "240"
      screeninch: "14" | "14.5" | "15" | "15.6" | "16" | "17" | "17.3"
      screeninch_new: "14" | "14.5" | "15" | "15.6" | "16" | "17" | "17.3"
      screenresolution: "HD" | "FULL HD" | "2K" | "2K+" | "4K"
      storagesize: "256GB" | "512GB" | "1TB" | "2TB"
      storagetype: "SSD" | "HDD"
      vram: "4GB" | "6GB" | "8GB" | "10GB" | "12GB"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
