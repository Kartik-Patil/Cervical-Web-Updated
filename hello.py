import os

def print_directory_tree(root_dir, indent=""):
    try:
        items = sorted(os.listdir(root_dir))
    except PermissionError:
        print(indent + "🚫 [Access Denied]")
        return

    for i, item in enumerate(items):
        path = os.path.join(root_dir, item)
        is_last = (i == len(items) - 1)
        connector = "└── " if is_last else "├── "
        print(indent + connector + item)

        if os.path.isdir(path):
            next_indent = indent + ("    " if is_last else "│   ")
            print_directory_tree(path, next_indent)

if __name__ == "__main__":
    root = r"D:\SDP\Cervical Cancer"  # your directory path
    if not os.path.isdir(root):
        print("❌ Invalid directory path!")
    else:
        print(f"📁 Directory tree for: {root}\n")
        print_directory_tree(root)
